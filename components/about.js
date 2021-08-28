import styles from "../styles/about.module.css";
import dividerStyle from "../styles/divider.module.css";

export default function About({ slideState }) {
  return (
    <div className={[styles.about, slideState].join(" ")}>
      <h5 className={dividerStyle.mobileDivider}>about</h5>
      <p className={styles.text}>
        <span className={styles.bold}>Hi there!</span> I&apos;m Leon Rode, a
        high-school student, software developer, and freelancer based in New
        York. I have been programming for over seven years, and it has always
        been something I am truly passionate about. I am fully self-taught, and
        I have used my skills to develop a variety of software, including
        websites, Arduino drivers, and other utilities (some of which are listed
        further down). Aside from developing, I enjoy playing chess, video
        games, and piano.
      </p>
    </div>
  );
}
