import styles from "../styles/projects.module.css";
import skillStyles from "../styles/skills.module.css";
import dividerStyle from "../styles/divider.module.css";

export default function Projects({ slideState }) {
  const covidTechs = ["next.js", "node.js", "mongodb", "react.js", "css"];
  const sudokuTechs = ["html", "css", "javascript", "node.js", "socket.io"];
  const joystickTechs = ["c++", "arduino"];
  const ICON_SIZE = "40";
  return (
    <div className={[styles.projects, slideState].join(" ")}>
      <h5 className={dividerStyle.mobileDivider}>projects</h5>
      <div className={styles.projectContainer}>
        <div className={styles.linkContainer}>
          <a
            className={styles.projectLink}
            href="https://westchestercovidtracker.com"
          >
            westchestercovidtracker.com
          </a>
          <span className={styles.projectLinkUnderline}></span>
        </div>

        <h4 className={styles.projectDesc}>
          visual & analytical tool to track COVID-19 timelines
        </h4>
        <div className={styles.projectTechsContainer}>
          {covidTechs.map((tech) => (
            <div className={skillStyles.techContainer} key={tech}>
              <img
                className={skillStyles.tech}
                src={`/${tech}.svg`}
                alt={tech}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
              <h5 className={skillStyles.techText}>{tech}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.linkContainer}>
          <a className={styles.projectLink} href="https://twosudoku.xyz">
            twosudoku.xyz
          </a>
          <span className={styles.projectLinkUnderline}></span>
        </div>

        <h4 className={styles.projectDesc}>
          real-time online multiplayer sudoku
        </h4>
        <div className={styles.projectTechsContainer}>
          {sudokuTechs.map((tech) => (
            <div className={skillStyles.techContainer} key={tech}>
              <img
                className={skillStyles.tech}
                src={`/${tech}.svg`}
                alt={tech}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
              <h5 className={skillStyles.techText}>{tech}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.linkContainer}>
          <a
            className={styles.projectLink}
            href="https://github.com/leonrode/better-joystick"
          >
            better-joystick
          </a>
          <span className={styles.projectLinkUnderline}></span>
        </div>

        <h4 className={styles.projectDesc}>
          dual-axis joystick component driver for Arduino
        </h4>
        <div className={styles.projectTechsContainer}>
          {joystickTechs.map((tech) => (
            <div className={skillStyles.techContainer} key={tech}>
              <img
                className={skillStyles.tech}
                src={`/${tech}.svg`}
                alt={tech}
                width={ICON_SIZE}
                height={ICON_SIZE}
                key={tech}
              />
              <h5 className={skillStyles.techText}>{tech}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
