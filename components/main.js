import styles from "../styles/main.module.css";

import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Work from "./work";
import Contact from "./contact";

function generatePage(pageIndex, slideState) {
  switch (pageIndex) {
    case 0:
      return <Home slideState={slideState !== null ? slideState : null} />;
    case 1:
      return <About slideState={slideState !== null ? slideState : null} />;
    case 2:
      return <Skills slideState={slideState !== null ? slideState : null} />;
    case 3:
      return <Projects slideState={slideState !== null ? slideState : null} />;
    case 4:
      return <Work slideState={slideState !== null ? slideState : null} />;
    case 5:
      return <Contact slideState={slideState !== null ? slideState : null} />;
  }
}

export default function Main({ currentPage, slideState, all }) {
  return (
    <div className={styles.main}>
      {!all && generatePage(currentPage, slideState)}
      {all && (
        <>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Work />
          <Contact />
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
