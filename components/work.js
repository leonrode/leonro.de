import styles from "../styles/work.module.css";
import dividerStyle from "../styles/divider.module.css";

export default function Work({ slideState }) {
  return (
    <div className={[styles.work, slideState].join(" ")}>
      <h5 className={dividerStyle.mobileDivider}>work</h5>
      <div className={styles.workContainer}>
        <div className={styles.linkContainer}>
          <a
            className={styles.workTitle}
            href="https://www.fiverr.com/share/27pXEN"
          >
            Freelancing
          </a>
          <span className={styles.workUnderline}></span>
        </div>

        <div className={styles.workDescContainer}>
          <h5 className={styles.workDesc}>3 months</h5>
          <h5 className={styles.workDesc}>5 star rating</h5>
          <h5 className={styles.workDesc}>5+ orders</h5>
          <h5 className={styles.workDesc}>600+ impressions</h5>
          <h5 className={styles.workDesc}>100% order completion</h5>
        </div>
      </div>
    </div>
  );
}
