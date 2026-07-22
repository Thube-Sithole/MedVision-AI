import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

import styles from "./AppShell.module.css";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.appShell}>
      <Sidebar />

      <div className={styles.content}>
        <Topbar />

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}