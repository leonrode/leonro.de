import { FiMenu, FiX } from "react-icons/fi";

import Link from "next/link";

import Logo from "./Logo";

const MobileNav = ({ show, toShow, toClose }) => {
  return (
    <div
      className={`${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      } transition absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-bg`}
    >
      <FiX onClick={toClose} className="text-text" size={35} />
      <div className="my-16 flex flex-col items-center">
        <span className="text-text text-xl font-light">
          <Link href="/experience">projects &amp; skills</Link>
        </span>
        <span className="mt-8 text-text text-xl font-light">
          <Link href="/experience">biography</Link>
        </span>
        <span className="mt-8 text-text text-xl font-light">
          <Link href="/experience">social</Link>
        </span>
      </div>
      <Logo />
    </div>
  );
};

export default MobileNav;
