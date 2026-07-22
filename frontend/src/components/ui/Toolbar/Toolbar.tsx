import styles from "./Toolbar.module.css";

type ToolbarProps = {
  title: string;
  children: React.ReactNode;
};

function Toolbar({
  title,
  children,
}: ToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <h2>{title}</h2>

      <div className={styles.actions}>
        {children}
      </div>
    </div>
  );
}

export default Toolbar;