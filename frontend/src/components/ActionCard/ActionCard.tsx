import { ReactNode } from "react";
import styles from "./ActionCard.module.css";

type ActionCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
};

export default function ActionCard({
  icon,
  title,
  description,
  onClick,
}: ActionCardProps) {
  return (
    <button
      className={styles.card}
      onClick={onClick}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
}