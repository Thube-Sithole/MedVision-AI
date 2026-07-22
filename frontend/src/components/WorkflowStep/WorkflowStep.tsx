import styles from "./WorkflowStep.module.css";

interface WorkflowStepProps {
  title: string;
  status: "completed" | "current" | "upcoming";
}

export default function WorkflowStep({
  title,
  status,
}: WorkflowStepProps) {
  return (
    <div className={styles.step}>
      <div className={`${styles.dot} ${styles[status]}`} />

      <span className={styles.title}>
        {title}
      </span>
    </div>
  );
}