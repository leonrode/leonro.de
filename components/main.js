import styles from "../styles/main.module.css";

import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Work from "./work";
import Contact from "./contact";

function generatePage(pageIndex, slideState, smallIcons) {
  switch (pageIndex) {
    case 0:
      return <Home slideState={slideState !== null ? slideState : null} />;
    case 1:
      return <About slideState={slideState !== null ? slideState : null} />;
    case 2:
      return (
        <Skills
          smallIcons={smallIcons}
          slideState={slideState !== null ? slideState : null}
        />
      );
    case 3:
      return (
        <Projects
          smallIcons={smallIcons}
          slideState={slideState !== null ? slideState : null}
        />
      );
    case 4:
      return <Work slideState={slideState !== null ? slideState : null} />;
    case 5:
      return (
        <Contact
          slideState={slideState !== null ? slideState : null}
          smallIcons={smallIcons}
        />
      );
  }
}

export default function Main({ currentPage, slideState, all, smallIcons }) {
  return (
    <div className={styles.main}>
      {!all && generatePage(currentPage, slideState, smallIcons)}
      {all && (
        <>
          <Home />
          <About />
          <Skills smallIcons={smallIcons} />
          <Projects smallIcons={smallIcons} />
          <Work />
          <Contact smallIcons={smallIcons} />
          <h6 className={styles.bottom}>Leon Rode - 2021</h6>
        </>
      )}
      <img
        className="logo"
        src="/logo.svg"
        alt="leon rode logo"
        width="25"
        height="40"
      />
    </div>
  );
}
