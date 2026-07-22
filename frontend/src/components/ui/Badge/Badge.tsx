import styles from "./Badge.module.css";
import clsx from "clsx";

type BadgeVariant =
  | "success"
  | "warning"
  | "info"
  | "danger";

type BadgeProps = {
  children: React.ReactNode;
  variant: BadgeVariant;
};

function Badge({ children, variant }: BadgeProps) {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[variant]
      )}
    >
      {children}
    </span>
  );
}

export default Badge;