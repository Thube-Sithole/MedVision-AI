import styles from "./CaseCard.module.css";

export default function CaseCard() {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.status}>🟢 Ready for Review</span>

        <span className={styles.countdown}>
          📅 Surgery in 3 Days
        </span>
      </header>

      <h3 className={styles.caseId}>MV-2026-001</h3>

      <div className={styles.details}>
        <p>👤 John Smith</p>
        <p>🦴 Maxillofacial Reconstruction</p>
        <p>👨‍⚕️ Dr. Patel</p>
        <p>🏥 Charlotte Maxeke Hospital</p>
        <p>📅 28 Jul 2026</p>
      </div>
    </article>
  );
}