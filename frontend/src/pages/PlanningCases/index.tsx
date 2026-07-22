import styles from "./PlanningCases.module.css";
import CaseCard from "../../components/CaseCard";

export default function PlanningCases() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Planning Cases</h1>

                <div className={styles.actions}>
                    <input
                        className={styles.search}
                        placeholder="Search patient..."
                    />

                    <button className={styles.button}>
                        + New Case
                    </button>
                </div>
            </div>

<div className={styles.caseGrid}>
    <CaseCard />
    <CaseCard />
    <CaseCard />
</div>
        </div>
    );
}