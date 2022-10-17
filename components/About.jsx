import { useState, useRef, useEffect } from "react";

const About = () => {
  const headerRef = useRef();
  const textRef = useRef();
  const imgRef = useRef();

  const [isHeaderOpened, setIsHeaderOpened] = useState(false);
  const [isTextOpened, setIsTextOpened] = useState(false);
  const [isImgOpened, setIsImgOpened] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.isEqualNode(textRef.current) && entry.isIntersecting) {
          setIsTextOpened(true);
        } else if (
          entry.target.isEqualNode(imgRef.current) &&
          entry.isIntersecting
        ) {
          setIsImgOpened(true);
        } else if (
          entry.target.isEqualNode(headerRef.current) &&
          entry.isIntersecting
        ) {
          setIsHeaderOpened(true);
        }
      });
    });

    observer.observe(textRef.current);
    observer.observe(imgRef.current);
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <h1
        ref={headerRef}
        id="header"
        className={`${
          isHeaderOpened ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 font-serif text-white text-6xl mt-96 mb-16`}
      >
        About Me
      </h1>
      <section className="flex flex-col md:flex-row justify-between w-full">
        <div
          ref={textRef}
          className={`${
            isTextOpened ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 w-full mb-24 md:mb-0`}
        >
          <p className="text-sub">
            Hi! I&apos;m Leon, a student in New York and an aspiring computer
            scientist and software engineer. <br /> <br />
            I&apos;ve been on the programming journey for over eight years,
            starting out writing the most basic Python programs, and currently
            crafting digital experiences to solve real problems. <br /> <br />I
            worked as a freelancer for seven months, during which I completed
            multiple orders and received a cumulative five-star rating.
            <br /> <br />I also run an Instagram account in which I share my
            growth as a developer through new tips and knowledge. <br /> <br />
            Aside from the internet, I enjoy playing Jazz piano, listening to
            music, and spending time with friends.
          </p>
        </div>
        <div className="w-full">
          <img
            ref={imgRef}
            className={`${
              isImgOpened ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 outer-right scale-75 origin-top`}
            src="/me.JPG"
            alt="a picture of leon rode"
          ></img>
        </div>
      </section>
    </>
  );
};

export default About;
