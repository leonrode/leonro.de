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
        <span className="text-text text-xl font-light">
          <Link href="/experience">experience</Link>
        </span>
        <span className="text-text text-xl font-light">
          <Link href="/experience">biography</Link>
        </span>
        <span className="text-text text-xl font-light">
          <Link href="/experience">social</Link>
        </span>
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
