import type { ReactNode } from "react";
import styles from "./SectionCard.module.css";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

function SectionCard({
  title,
  children,
  action,
}: SectionCardProps) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {action && (
          <div className={styles.action}>
            {action}
          </div>
        )}
      </div>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}

export default SectionCard;