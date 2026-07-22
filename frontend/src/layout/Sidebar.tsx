import {
  LayoutDashboard,
  FolderOpen,
  Upload,
  Brain,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

import styles from "./Sidebar.module.css";

type NavigationItem = {
  label: string;
  icon: LucideIcon;
};

const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Planning Cases",
    icon: FolderOpen,
  },
  {
    label: "Upload DICOM",
    icon: Upload,
  },
  {
    label: "AI Segmentation",
    icon: Brain,
  },
  {
    label: "Reports",
    icon: BarChart3,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h1 className={styles.logo}>🧠 MedVision AI</h1>

        <p className={styles.subtitle}>
          Surgical Planning Platform
        </p>
      </div>

      <nav className={styles.navigation}>
        {navigation.map(({ label, icon: Icon }) => (
          <button key={label} className={styles.navButton}>
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <footer className={styles.footer}>
        Version 1.0.0
      </footer>
    </aside>
  );
}

export default Sidebar;