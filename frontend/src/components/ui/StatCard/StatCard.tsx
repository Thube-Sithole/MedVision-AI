import styles from "./StatCard.module.css";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
};

function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>
        {title}
      </p>

      <h2 className={styles.value}>
        {value}
      </h2>

      <p className={styles.subtitle}>
        {subtitle}
      </p>
    </div>
  );
}

export default StatCard;