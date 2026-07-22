import styles from "./CaseRow.module.css";

interface CaseRowProps {
  id: string;
  status: string;
}

export default function CaseRow({
  id,
  status,
}: CaseRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.id}>{id}</span>

      <span className={styles.status}>{status}</span>
    </div>
  );
}