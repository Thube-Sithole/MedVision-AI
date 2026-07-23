import styles from "./Viewer.module.css";
import CornerstoneViewport from "../CornerstoneViewport";

export default function Viewer() {
  return (
    <section className={styles.viewer}>
      <header className={styles.toolbar}>
        <button>Axial</button>
        <button>Coronal</button>
        <button>Sagittal</button>
        <button>3D</button>

        <div className={styles.spacer} />

        <button>Reset</button>
        <button>Export</button>
      </header>

      <main className={styles.viewport}>
        <CornerstoneViewport />
      </main>

      <footer className={styles.statusbar}>
        <span>Slice: -- / --</span>
        <span>Window: Bone</span>
        <span>Zoom: 100%</span>
      </footer>
    </section>
  );
}