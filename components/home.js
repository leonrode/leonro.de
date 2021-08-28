import styles from "../styles/home.module.css";

export default function Home({ slideState }) {
  return (
    <div className={[styles.home, slideState].join(" ")}>
      <div className={styles.nameContainer}>
        <h1 className={styles.name}>leon rode</h1>
        <span className={styles.nameUnderline}></span>
      </div>
      <div className={styles.nameContainer}>
        <h4 className={styles.subtitle}>software developer</h4>
        <span className={styles.subtitleUnderline}></span>
      </div>
    </div>
  );
}
