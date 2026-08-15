import { useEffect, useRef } from "react";
import styles from "./CornerstoneViewport.module.css";

import {
  resizeViewport,
  disableViewport,
} from "../../services/cornerstone";

import { ImagingService } from "../../services/imaging/ImagingService";

export default function CornerstoneViewport() {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: ResizeObserver | undefined;
    let initialized = false;

    async function initialize() {
      if (!viewportRef.current) return;

      try {
        await ImagingService.initializeViewport(
          viewportRef.current
        );

        initialized = true;

        observer = new ResizeObserver(() => {
          resizeViewport();
        });

        observer.observe(viewportRef.current);

        console.log("✅ CornerstoneViewport initialize()");
        console.log("🩻 Cornerstone viewport ready.");
      } catch (error) {
        console.error(
          "❌ Failed to initialize viewer:",
          error
        );
      }
    }

    initialize();

    return () => {
      observer?.disconnect();

      if (initialized) {
        disableViewport();
      }
    };
  }, []);

  return (
    <div
      ref={viewportRef}
      className={styles.viewport}
    />
  );
}