import { useEffect, useRef } from "react";
import styles from "./CornerstoneViewport.module.css";
import { initializeCornerstone } from "../../services/cornerstone";

import {
  enableViewport,
} from "../../services/cornerstone";

export default function CornerstoneViewport() {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function initialize() {
      await initializeCornerstone();

      if (viewportRef.current) {
        enableViewport(viewportRef.current);
      }

      console.log("🩻 Cornerstone viewport ready.");

      console.log(viewportRef.current);
    }

    initialize();
  }, []);

  return (
    <div
      ref={viewportRef}
      className={styles.viewport}
    />
  );
}