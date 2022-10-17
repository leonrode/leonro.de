import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
const Projects = () => {
  const featured1 = useRef();
  const featured2 = useRef();
  const other = useRef();
  const [isFeatured1Opened, setIsFeatured1Opened] = useState(false);
  const [isFeatured2Opened, setIsFeatured2Opened] = useState(false);
  const [isOtherOpened, setIsOtherOpened] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].target.isEqualNode(featured1.current) &&
        entries[0].isIntersecting
      ) {
        setIsFeatured1Opened(true);
      }
      if (
        entries[0].target.isEqualNode(featured2.current) &&
        entries[0].isIntersecting
      ) {
        setIsFeatured2Opened(true);
      }
      if (
        entries[0].target.isEqualNode(other.current) &&
        entries[0].isIntersecting
      ) {
        setIsOtherOpened(true);
      }
    });
    observer.observe(featured1.current);
    observer.observe(featured2.current);
    observer.observe(other.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <h1 id="projects" className="font-serif text-white text-6xl mt-96 mb-16">
        Projects
      </h1>
      <section
        ref={featured1}
        className={`${
          isFeatured1Opened ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 flex flex-col md:flex-row items-center justify-between w-full`}
      >
        <section className=" md:w-1/2">
          <h3 className="text-primary mb-2">featured</h3>
          <h1 className="text-white text-4xl">Westchester Covid Tracker</h1>
          <p className="text-sub my-2">
            an interactive tool to view COVID-19 case trends within
            municipalities of Westchester County, NY. It began tracking data
            since November 2020, a few months into the pandemic, and continues
            to publish new data daily
          </p>
          <div className="flex justify-start my-4">
            <span className="text-primary mr-4">next.js</span>
            <span className="text-primary mr-4">mongodb</span>
            <span className="text-primary mr-4">aws</span>
            <span className="text-primary">python 3</span>
          </div>
          <div className="flex items-center text-sub justify-start ">
            <a
              href="https://github.com/leonrode/westchestercovidtracker.com"
              target="cursor-pointer _blank"
            >
              <FiGithub size={28} />
            </a>
            <a href="https://westchestercovidtracker.com" target="_blank">
              <FiExternalLink size={28} className="cursor-pointer ml-2" />
            </a>
          </div>
        </section>
        <section className="md:w-1/2 my-8 md:my-0 md:px-4 ">
          <img
            className="outer-right"
            src="https://camo.githubusercontent.com/a32a834663d026aaa4c6d9b540425d1463f6b02e6ba3848a1d5b5a809f50684f/68747470733a2f2f692e696d6775722e636f6d2f7830736e3662552e706e67"
          ></img>
        </section>
      </section>
      <section
        ref={featured2}
        className={`${
          isFeatured2Opened ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 flex md:flex-row flex-col-reverse items-center justify-between w-full mt-4`}
      >
        <section className="md:w-1/2 md:px-4 ">
          <img
            className="hidden md:block outer-left"
            src="https://i.imgur.com/luBHY0e.png"
          ></img>
          <img
            className="md:hidden block my-8 outer-right"
            src="https://i.imgur.com/luBHY0e.png"
          ></img>
        </section>
        <section className="md:w-1/2">
          <h3 className="text-primary mb-2 text-right">featured</h3>
          <h1 className="text-white text-4xl text-right">Mazzle</h1>
          <p className="text-sub my-2 text-right">
            a prototype mathematics studying website focused on unlimited,
            fast-paced practice.
          </p>
          <div className="flex justify-end my-4 ">
            <span className="text-primary mr-4">next.js</span>
            <span className="text-primary mr-4">mongodb</span>

            <span className="text-primary">tailwindcss</span>
          </div>
          <div className="flex items-center text-sub justify-end ">
            <a
              href="https://github.com/leonrode/mazzle"
              target="cursor-pointer _blank"
            >
              <FiGithub size={28} />
            </a>
            <a href="https://mazzle.vercel.app" target="_blank">
              <FiExternalLink size={28} className="cursor-pointer ml-2" />
            </a>
          </div>
        </section>
      </section>
      <section
        ref={other}
        className="mt-24 flex md:flex-row flex-col w-full justify-between"
      >
        <div
          className={`${
            isOtherOpened ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 delay-100 relative flex flex-col aspect-square bg-elevated w-full px-6 py-8`}
        >
          <h2 className="text-xl font-bold text-white ">
            Sports Photo Gallery
          </h2>
          <p className="text-sub mt-4 text-sm">
            a display of hundreds of photos in an event-by-event basis, allowing
            users to filter and sort the events in a given year
          </p>
          <div className="flex justify-start my-4 text-sm">
            <span className="text-primary mr-2">next.js</span>
            <span className="text-primary mr-2">mongodb</span>

            <span className="text-primary mr-2">aws</span>
            <span className="text-primary">tailwindcss</span>
          </div>
          <div className="absolute bottom-8 left-6 flex items-center text-sub justify-start justify-self-end">
            <a
              href="https://github.com/leonrode/sports-photo-app"
              target="cursor-pointer _blank"
            >
              <FiGithub size={28} />
            </a>
            <a href="https://elliott-photo-app.vercel.app" target="_blank">
              <FiExternalLink size={28} className="cursor-pointer ml-2" />
            </a>
          </div>
        </div>
        <div
          className={`${
            isOtherOpened ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 delay-[400ms] relative flex flex-col aspect-square bg-elevated w-full my-8 md:my-0 mx-0 md:mx-8 px-6 py-8`}
        >
          <h2 className="text-xl font-bold text-white ">Disturb the Noize</h2>
          <p className="text-sub mt-4 text-sm">
            an online platform to connect musical talents with producers and
            entrepreneurs in the music industry.
          </p>
          <div className="flex justify-start my-4 text-sm">
            <span className="text-primary mr-2">ts</span>
            <span className="text-primary mr-2">next.js</span>
            <span className="text-primary mr-2">mongodb</span>
            <span className="text-primary">tailwind</span>
          </div>
          <div className="absolute bottom-8 left-6 flex items-center text-sub justify-start justify-self-end">
            <a href="https://disturbthenoize.com" target="_blank">
              <FiExternalLink size={28} className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div
          className={`${
            isOtherOpened ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 delay-[700ms] relative flex flex-col aspect-square bg-elevated w-full px-6 py-8`}
        >
          <h2 className="text-xl font-bold text-white ">SoloChess Solver</h2>
          <p className="text-sub mt-4 text-sm">
            solves Chess.com&apos;s SoloChess game mode by recursively building
            a solution to the puzzles and displaying a list of moves to solve
            the puzzles
          </p>
          <div className="flex justify-start my-4 text-sm">
            <span className="text-primary mr-2">javascript</span>
          </div>
          <div className="absolute bottom-8 left-6 flex items-center text-sub justify-start justify-self-end">
            <a
              href="https://github.com/leonrode/solo-chess-solver-js"
              target="cursor-pointer _blank"
            >
              <FiGithub size={28} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
