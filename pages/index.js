import Logo from "../components/Logo";
import Me from "../components/Me";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { FiGithub, FiInstagram } from "react-icons/fi";
const Home = () => {
  return (
    <main className="main relative w-screen h-screen bg-bg">
      <section className="bg-bg z-50 top-0 absolute w-full py-4 md:py-8 px-8  flex items-center justify-between">
        <div id="logo" className="fadeIn4 ">
          <Logo />
        </div>
        <div className="invisible md:visible flex w-1/6 justify-between items-center">
          <h2 className="fadeIn5 text-white">
            <a href="#header">
              <span className="text-primary">a</span>bout
            </a>
          </h2>
          <h2 className="fadeIn6 text-white">
            <a href="#projects">
              <span className="text-primary">p</span>rojects
            </a>
          </h2>
          <h2 className="fadeIn7 text-white">
            <a href="#contact">
              <span className="text-primary">c</span>ontact
            </a>
          </h2>
        </div>
        <div className="md:hidden"></div>
      </section>
      <section className="flex w-full h-full justify-between">
        <aside className="fadeIn4 md:flex flex-col w-32 hidden  h-full justify-center items-center ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/leonrode"
          >
            <FiGithub size={32} className="cursor-pointer my-4 text-sub" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/leonro.de"
          >
            <FiInstagram size={32} className="cursor-pointer my-4 text-sub" />
          </a>
        </aside>
        <main className="overflow-y-scroll overflow-x-hidden flex flex-col items-start w-full lg:px-48 pt-32 md:pt-64 pb-32 px-8 md:px-16">
          <Me />
          <About />
          <Projects />
          <Contact />
          <p className="text-sub mt-64">
            Designed & Developed by Leon Rode, 2022. <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/leonrode/leonro.de"
            >
              See the source.
            </a>
          </p>
        </main>
        <aside className="fadeIn4 md:flex flex-col hidden w-24 lg:w-32 h-full justify-center items-center">
          <a href="mailto:leon.rode13@gmail.com">
            <h3 className=" cursor-pointer rotate-90 text-sub">
              leon.rode13@gmail.com
            </h3>
          </a>
        </aside>
      </section>
    </main>
  );
};

export default Home;
