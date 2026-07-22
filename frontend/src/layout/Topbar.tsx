import { Bell, Search, UserCircle2 } from "lucide-react";

import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <h2>Good Afternoon 👋</h2>

        <p>Welcome back to MedVision AI</p>
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton}>
          <Search size={18} />
        </button>

        <button className={styles.iconButton}>
          <Bell size={18} />
        </button>

        <button className={styles.iconButton}>
          <UserCircle2 size={20} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;