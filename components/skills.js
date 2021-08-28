import styles from "../styles/skills.module.css";
import dividerStyle from "../styles/divider.module.css";

export default function Skills({ slideState, smallIcons }) {
  const webTechs = [
    "javascript",
    "css",
    "html",
    "node.js",
    "react.js",
    "next.js",
    "express",
    "mongodb",
    "socket.io",
    "p5js",
  ];

  const scriptingTechs = ["python", "arduino", "c++"];
  const ICON_SIZE = smallIcons ? "40" : "60";
  return (
    <div className={[styles.skills, slideState].join(" ")}>
      <h5 className={dividerStyle.mobileDivider}>skills</h5>
      <div className={styles.grouping}>
        <h3 className={styles.groupHeader}>Web</h3>
        <div className={styles.groupTechs}>
          {webTechs.map((tech) => (
            <div className={styles.techContainer} key={tech}>
              <img
                className={styles.tech}
                src={`/${tech}.svg`}
                alt={tech}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
              <h5 className={styles.techText}>{tech}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.grouping}>
        <h3 className={styles.groupHeader}>Scripting & Computing</h3>
        <div className={styles.groupTechs}>
          {scriptingTechs.map((tech) => (
            <div className={styles.techContainer} key={tech}>
              <img
                className={styles.tech}
                src={`/${tech}.svg`}
                alt={tech}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
              <h5 className={styles.techText}>{tech}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
