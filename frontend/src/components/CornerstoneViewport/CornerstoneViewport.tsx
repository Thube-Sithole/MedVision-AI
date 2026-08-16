import { useEffect, useRef, useState } from "react";
import styles from "./CornerstoneViewport.module.css";

import {
  resizeViewport,
  disableViewport,
} from "../../services/cornerstone";

import { ImagingService } from "../../services/imaging/ImagingService";

import {
  Enums,
  type StackViewport,
} from "@cornerstonejs/core";

interface CornerstoneViewportProps {
  onZoomChange?: (zoom: number) => void;
  onReset?: (reset: () => void) => void;
}

export default function CornerstoneViewport({
  onZoomChange,
  onReset,
}: CornerstoneViewportProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [currentSlice, setCurrentSlice] = useState(0);
  const [totalSlices, setTotalSlices] = useState(0);

  useEffect(() => {
    let observer: ResizeObserver | undefined;
    let initialized = false;

    let handleStackNewImage:
      | (() => void)
      | undefined;

    let handleZoom:
      | ((event: WheelEvent) => void)
      | undefined;

    async function initialize() {
      if (!viewportRef.current) return;

      const element = viewportRef.current;

      try {
        // Initialize Cornerstone + load stack
        const viewport =
          await ImagingService.initializeViewport(element);

        initialized = true;

        const stackViewport =
          viewport as StackViewport;

        const resetViewport = () => {
          stackViewport.resetCamera();
          stackViewport.setZoom(1);
          stackViewport.render();

         onZoomChange?.(1);

        console.log("🔄 Viewport reset");
        };
// Give the parent access to the reset function
        onReset?.(resetViewport);
        // --------------------------------
        // Initial stack information
        // --------------------------------

        const total =
          stackViewport.getNumberOfSlices();

        const current =
          stackViewport.getCurrentImageIdIndex();

        setTotalSlices(total);
        setCurrentSlice(current);

        // --------------------------------
        // Initial zoom
        // --------------------------------

        const initialZoom =
          stackViewport.getZoom();

        onZoomChange?.(initialZoom);

        console.log("🔍 Initial zoom:", {
          zoom: `${Math.round(initialZoom * 100)}%`,
        });

        // --------------------------------
        // Slice change listener
        // --------------------------------

        handleStackNewImage = () => {
          const index =
            stackViewport.getCurrentImageIdIndex();

          setCurrentSlice(index);

          console.log("🧠 Slice changed:", {
            current: index + 1,
            total,
          });
        };

        element.addEventListener(
          Enums.Events.STACK_NEW_IMAGE,
          handleStackNewImage
        );

        // --------------------------------
        // Zoom handler
        // --------------------------------

        handleZoom = (event: WheelEvent) => {
          // Normal wheel = slice scrolling
          if (!event.ctrlKey) {
            return;
          }

          // Prevent browser zoom
          event.preventDefault();

          const currentZoom =
            stackViewport.getZoom();

          const zoomFactor =
            event.deltaY < 0
              ? 1.1
              : 0.9;

          const newZoom = Math.min(
            Math.max(
              currentZoom * zoomFactor,
              0.5
            ),
            5
          );

          stackViewport.setZoom(newZoom);

          stackViewport.render();

          onZoomChange?.(newZoom);

          console.log("🔍 Zoom changed:", {
            zoom: `${Math.round(newZoom * 100)}%`,
          });
        };

        element.addEventListener(
          "wheel",
          handleZoom,
          { passive: false }
        );

        console.log("🔍 Zoom handler attached");

        // --------------------------------
        // Resize handling
        // --------------------------------

        observer = new ResizeObserver(() => {
          resizeViewport();
        });

        observer.observe(element);

        console.log(
          "✅ CornerstoneViewport initialized"
        );

        console.log(
          "🩻 Cornerstone viewport ready."
        );

      } catch (error) {
        console.error(
          "❌ Failed to initialize viewer:",
          error
        );
      }
    }

    initialize();

    // --------------------------------
    // Cleanup
    // --------------------------------

    return () => {
      observer?.disconnect();

      if (
        viewportRef.current &&
        handleStackNewImage
      ) {
        viewportRef.current.removeEventListener(
          Enums.Events.STACK_NEW_IMAGE,
          handleStackNewImage
        );
      }

      if (
        viewportRef.current &&
        handleZoom
      ) {
        viewportRef.current.removeEventListener(
          "wheel",
          handleZoom
        );
      }

      if (initialized) {
        disableViewport();
      }
    };
  }, [onZoomChange]);

  return (
    <div className={styles.viewport}>
      <div
        ref={viewportRef}
        className={styles.viewportCanvas}
      />

      <div className={styles.sliceIndicator}>
        Slice:{" "}
        {totalSlices > 0
          ? currentSlice + 1
          : "--"}{" "}
        /{" "}
        {totalSlices > 0
          ? totalSlices
          : "--"}
      </div>
    </div>
  );
}