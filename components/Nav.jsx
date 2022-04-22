import Logo from "./Logo";

import Link from "next/link";

import MobileNav from "./MobileNav";

import { FiMenu } from "react-icons/fi";

import { useState } from "react";

const Nav = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex justify-between items-center w-1/2 lg:w-1/3">
        <div className="group flex flex-col text-text text-xl font-light">
          <Link href="/experience">experience</Link>
          <span className="group-hover:w-full w-0 transition-[width] bg-gradient-to-r from-primary to-darkPrimary  h-[2px]"></span>
        </div>
        <div className="group flex flex-col text-text text-xl font-light">
          <Link href="/biography">biography</Link>
          <span className="group-hover:w-full w-0 transition-[width] bg-gradient-to-r from-primary to-darkPrimary  h-[2px]"></span>
        </div>
        <div className="group flex flex-col text-text text-xl font-light">
          <Link href="/social">social</Link>
          <span className="group-hover:w-full w-0 transition-[width] bg-gradient-to-r from-primary to-darkPrimary  h-[2px]"></span>
        </div>


      </div>
      <FiMenu
        onClick={() => setShowMobile(true)}
        className="md:hidden text-text"
        size={30}
      />
      <MobileNav toClose={() => setShowMobile(false)} show={showMobile} />
    </nav>
  );
};

export default Nav;
