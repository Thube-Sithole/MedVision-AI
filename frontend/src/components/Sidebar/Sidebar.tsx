import {
  LayoutDashboard,
  FolderKanban,
  Upload,
  BrainCircuit,
  FileText,
  Users,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span>🧠</span>
        <h2>MedVision</h2>
      </div>

      <nav>
        <NavLink to="/medvision">
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/medvision/cases">
          <FolderKanban size={18} />
          Planning Cases
        </NavLink>

        <NavLink to="#">
          <Upload size={18} />
          Uploads
        </NavLink>

        <NavLink to="#">
          <BrainCircuit size={18} />
          AI Queue
        </NavLink>

        <NavLink to="#">
          <FileText size={18} />
          Reports
        </NavLink>

        <NavLink to="#">
          <Users size={18} />
          Surgeons
        </NavLink>

        <NavLink to="#">
          <Settings size={18} />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}