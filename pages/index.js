import Head from "next/head";

import Main from "../components/main";
import Sidebar from "../components/sidebar";

import { useEffect, useState } from "react";

export default function Home() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [slideState, setSlideState] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 1368);
  });
  function changePage(newPage) {
    const animationDurationMs = 300;
    if (newPage < currentPageIndex) {
      setSlideState("slideDown");

      setTimeout(() => {
        setSlideState("slideDownFromTop");
      }, animationDurationMs);

      setTimeout(() => {
        setCurrentPageIndex(newPage);
      }, animationDurationMs);
    } else {
      setSlideState("slideUp");

      setTimeout(() => {
        setSlideState("slideUpFromBottom");
      }, animationDurationMs);

      setTimeout(() => {
        setCurrentPageIndex(newPage);
      }, animationDurationMs);
    }
  }
  return (
    <div>
      <Head>
        <title>Leon Rode | leonro.de</title>
        <meta name="robots" content="index, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:title" content="Leon Rode | leonro.de" />
        <meta property="og:url" content="https://leonro.de" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="View Leon Rode's software portfolio on leonro.de."
        />
        <meta
          name="description"
          content="View Leon Rode's software portfolio."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#201e1f" />
        <meta name="msapplication-TileColor" content="#201e1f" />
        <meta name="theme-color" content="#201e1f" />
      </Head>
      <Main
        currentPage={currentPageIndex}
        slideState={slideState}
        all={isSmallScreen}
        smallIcons={isSmallScreen}
      />
      {!isSmallScreen && (
        <Sidebar
          currentPage={currentPageIndex}
          pageSetter={changePage}
          slideState={slideState}
        />
      )}
    </div>
  );
}
