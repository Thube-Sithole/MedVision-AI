import styles from "./Dashboard.module.css";

import StatCard from "../../components/ui/StatCard/StatCard";
import SectionCard from "../../components/SectionCard";

import CaseRow from "../../components/CaseRow";

import ActionCard from "../../components/ActionCard";

import CaseCard from "../../components/CaseCard";

import {
  PlusCircle,
  Upload,
  FileText,
  FolderOpen,
} from "lucide-react";

import CornerstoneViewport from "../../components/CornerstoneViewport/CornerstoneViewport";

function Dashboard() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.heading}>Dashboard</h1>

        <p className={styles.subheading}>
          AI-powered surgical planning platform.
        </p>
      </div>

      <div className={styles.stats}>
        <StatCard
          title="Active Cases"
          value={24}
          subtitle="+3 Today"
        />

        <StatCard
          title="AI Queue"
          value={8}
          subtitle="Ready"
        />

        <SectionCard title="CT Viewer">
        <CornerstoneViewport />
        </SectionCard>

        <StatCard
          title="Completed"
          value={152}
          subtitle="This Month"
        />

        <StatCard
          title="Uploads"
          value={18}
          subtitle="Pending"
        />
      </div>

      <div className={styles.content}>
        <SectionCard title="Recent Planning Cases">
          <CaseRow
              id="MV-2026-001"
              status="Ready for Review"
          />

          <CaseRow
              id="MV-2026-002"
              status="Segmenting"
          />

          <CaseRow
              id="MV-2026-003"
              status="Awaiting Upload"
          />
        </SectionCard>

        <SectionCard title="AI Queue">
          <p>Waiting for Segmentation</p>
          <p>Ready for Review</p>
          <p>Completed</p>
        </SectionCard>
      </div>

        <SectionCard title="Quick Actions">
       <div className={styles.quickActions}>
        <ActionCard
          icon={<PlusCircle />}
          title="Create New Case"
          description="Start a new surgical planning case"
        />
        <ActionCard
          icon={<Upload />}
          title="Upload Image"
          description="Upload medical images for analysis"
        />
        <ActionCard
          icon={<FileText />}
          title="View Reports"
          description="Access completed planning reports"
        />
        <ActionCard
          icon={<FolderOpen />}
          title="Manage Files"
          description="Organize and manage your files"
        />
        </div>
        </SectionCard>
      </div>
  );
}

export default Dashboard;