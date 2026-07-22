import { useRef, useState } from "react";
import styles from "./DropZone.module.css";

export default function DropZone() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [dragging, setDragging] = useState(false);
  const [studyName, setStudyName] = useState("");

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;

    setStudyName(files[0].name);
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />

      <div
        className={`${styles.dropZone} ${
          dragging ? styles.dragging : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        <div className={styles.icon}>🩻</div>

        <h2>No DICOM Study Loaded</h2>

        <p>
          Drag &amp; Drop a DICOM study here
        </p>

        <span>or</span>

        <button
          onClick={() => inputRef.current?.click()}
        >
          Browse Files
        </button>

        {studyName && (
          <p className={styles.filename}>
            Selected: {studyName}
          </p>
        )}
      </div>
    </>
  );
}