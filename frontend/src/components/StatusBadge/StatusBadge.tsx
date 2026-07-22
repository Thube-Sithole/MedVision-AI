import styles from "./StatusBadge.module.css";

type Props = {
    status: string;
};

export default function StatusBadge({ status }: Props) {
    return (
        <span className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
            {status}
        </span>
    );
}