import { useState, useEffect, useRef } from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";

const Contact = () => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].target.isEqualNode(ref.current) &&
        entries[0].isIntersecting
      ) {
        setIsOpened(true);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      id="contact"
      className={`${
        isOpened ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000  mt-96`}
    >
      <h1 ref={ref} className="font-serif text-white text-6xl mb-16">
        Contact Me
      </h1>
      <p className="text-sub md:w-1/2">
        Always open to new opportunities, or just questions in general! Feel
        free to leave a message!
      </p>
      <button
        type="submit"
        className="border-2 border-primary text-primary w-1/2 md:w-1/3 py-4 mt-24"
      >
        <a href="mailto:leon.rode13@gmail.com">say hi</a>
      </button>
      <div className="flex items-center w-1/2 md:hidden text-sub justify-evenly mt-8">
        <a href="https://github.com/leonrode">
          <FiGithub size={32} />
        </a>
        <a href="https://instagram.com/leonro.de">
          <FiInstagram size={32} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
