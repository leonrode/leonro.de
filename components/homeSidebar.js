import styles from "../styles/homeSidebar.module.css";

export default function HomeSidebar({ pageSetter, slideState }) {
  return (
    <div className={[styles.homeSidebar, slideState].join(" ")}>
      <div
        className={styles.sidebarElement}
        onClick={() => {
          pageSetter(1);
        }}
      >
        <h3 className={styles.sidebarText}>about</h3>
        <span className={styles.sidebarUnderline}></span>
      </div>
      <div
        className={styles.sidebarElement}
        onClick={() => {
          pageSetter(2);
        }}
      >
        <h3 className={styles.sidebarText}>skills</h3>
        <span className={styles.sidebarUnderline}></span>
      </div>
      <div
        className={styles.sidebarElement}
        onClick={() => {
          pageSetter(3);
        }}
      >
        <h3 className={styles.sidebarText}>projects</h3>
        <span className={styles.sidebarUnderline}></span>
      </div>
      <div
        className={styles.sidebarElement}
        onClick={() => {
          pageSetter(4);
        }}
      >
        <h3 className={styles.sidebarText}>work</h3>
        <span className={styles.sidebarUnderline}></span>
      </div>
      <div
        className={styles.sidebarElement}
        onClick={() => {
          pageSetter(5);
        }}
      >
        <h3 className={styles.sidebarText}>contact</h3>
        <span className={styles.sidebarUnderline}></span>
      </div>
    </div>
  );
}
