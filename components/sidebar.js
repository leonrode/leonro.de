import styles from "../styles/sidebar.module.css";
import sidebarStyles from "../styles/sidebar.module.css";

import HomeSidebar from "./homeSidebar";
import AboutSidebar from "./aboutSidebar";
import SkillsSidebar from "./skillsSidebar";
import ProjectsSidebar from "./projectsSidebar";
import WorkSidebar from "./workSidebar";
import ContactSidebar from "./contactSidebar";

function generateSidebar(pageIndex, slideState, pageSetter) {
  switch (pageIndex) {
    case 0:
      return (
        <HomeSidebar
          slideState={slideState !== null ? slideState : null}
          pageSetter={pageSetter}
        />
      );
    case 1:
      return (
        <AboutSidebar
          slideState={slideState !== null ? slideState : null}
          pageSetter={pageSetter}
        />
      );
    case 2:
      return (
        <SkillsSidebar
          slideState={slideState !== null ? slideState : null}
          pageSetter={pageSetter}
        />
      );
    case 3:
      return (
        <ProjectsSidebar
          slideState={slideState !== null ? slideState : null}
          pageSetter={pageSetter}
        />
      );
    case 4:
      return (
        <WorkSidebar
          slideState={slideState !== null ? slideState : null}
          pageSetter={pageSetter}
        />
      );
    case 5:
      return (
        <ContactSidebar
          slideState={slideState !== null ? slideState : null}
          pageSetter={pageSetter}
        />
      );
  }
}

export default function Sidebar({ currentPage, pageSetter, slideState }) {
  console.log(currentPage);
  return (
    <div className={styles.sidebar}>
      {currentPage !== 0 ? (
        <div className={sidebarStyles.arrowUpContainer}>
          <span className={sidebarStyles.sidebarArrowBorder}></span>
          <img
            className={sidebarStyles.sidebarArrowUp}
            src="/arrow-up-white.svg"
            alt="arrow up link"
            width="25"
            height="25"
            onClick={() => {
              pageSetter(currentPage - 1);
            }}
          />
        </div>
      ) : null}
      {generateSidebar(currentPage, slideState, pageSetter)}
      {currentPage !== 0 && currentPage !== 5 ? (
        <div className={sidebarStyles.arrowDownContainer}>
          <img
            className={sidebarStyles.sidebarArrowDown}
            src="/arrow-down-white.svg"
            alt="arrow up link"
            width="25"
            height="25"
            onClick={() => {
              pageSetter(currentPage + 1);
            }}
          />
          <span className={sidebarStyles.sidebarArrowBorder}></span>
        </div>
      ) : currentPage === 5 ? (
        <div className={sidebarStyles.arrowDownContainer}>
          <img
            className={sidebarStyles.sidebarArrowDown}
            src="/home.svg"
            alt="home link"
            width="25"
            height="25"
            onClick={() => {
              pageSetter(0);
            }}
          />
          <span className={sidebarStyles.sidebarArrowBorder}></span>
        </div>
      ) : null}
    </div>
  );
}
