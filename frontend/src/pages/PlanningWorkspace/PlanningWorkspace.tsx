import styles from "./PlanningWorkspace.module.css";

import SectionCard from "../../components/SectionCard";
import DetailRow from "../../components/DetailRow";
import WorkflowStep from "../../components/WorkflowStep";
import Viewer from "../../components/Viewer";

export default function PlanningWorkspace() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button className={styles.backButton}>
          ← Back to Cases
        </button>

        <h1 className={styles.caseId}>
          MV-2026-001
        </h1>

        <span className={styles.status}>
          Ready for Review
        </span>
      </div>

      <div className={styles.workspace}>
        <div className={styles.patient}>
          <SectionCard title="Patient Summary">
            <DetailRow label="Patient" value="John Doe" />
            <DetailRow label="Case ID" value="MV-2026-001" />
            <DetailRow
              label="Procedure"
              value="Mandibular Reconstruction"
            />
            <DetailRow label="Surgeon" value="Dr Jane Smith" />
            <DetailRow label="Hospital" value="Netcare Milpark" />
            <DetailRow label="Surgery" value="25 Jul 2026" />
          </SectionCard>
        </div>
        <div className={styles.viewer}>
        <Viewer />
        </div>

        <div className={styles.workflow}>
          <SectionCard title="Workflow">
            <WorkflowStep
              title="Case Created"
              status="completed"
            />
            <WorkflowStep
              title="CT Uploaded"
              status="completed"
            />
            <WorkflowStep
              title="AI Segmentation"
              status="completed"
            />
            <WorkflowStep
              title="Surgical Planning"
              status="current"
            />
            <WorkflowStep
              title="Surgeon Review"
              status="upcoming"
            />
            <WorkflowStep
              title="Manufacturing"
              status="upcoming"
            />
            <WorkflowStep
              title="Completed"
              status="upcoming"
            />
          </SectionCard>
        </div>

        <div className={styles.notes}>
          <SectionCard title="Notes">
            <p>Clinical notes will go here.</p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}