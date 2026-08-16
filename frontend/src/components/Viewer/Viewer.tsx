import { useState } from "react";
import styles from "./Viewer.module.css";
import CornerstoneViewport from "../CornerstoneViewport";

export default function Viewer() {
  const [resetViewport, setResetViewport] =
    useState<(() => void) | null>(null);

  const [zoom, setZoom] = useState(1);

  return (
    <section className={styles.viewer}>
      <header className={styles.toolbar}>
        <button>Axial</button>
        <button>Coronal</button>
        <button>Sagittal</button>
        <button>3D</button>

        <div className={styles.spacer} />

        <button
          onClick={() => resetViewport?.()}
        >
          Reset
        </button>

        <button>Export</button>
      </header>

      <main className={styles.viewport}>
        <CornerstoneViewport
          onZoomChange={setZoom}
          onReset={(reset) => setResetViewport(() => reset)}
        />
      </main>

      <footer className={styles.statusbar}>
        <span>
          Slice: -- / --
        </span>

        <span>
          Window: Bone
        </span>

        <span>
          Zoom: {Math.round(zoom * 100)}%
        </span>
      </footer>
    </section>
  );
}