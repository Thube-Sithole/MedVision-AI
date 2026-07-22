import styles from "./DetailRow.module.css";

interface DetailRowProps {
  label: string;
  value: string;
}

export default function DetailRow({
  label,
  value,
}: DetailRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>

      <span className={styles.value}>{value}</span>
    </div>
  );
}