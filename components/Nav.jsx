import Logo from "./Logo";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="flex justify-between items-center w-1/3">
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
    </nav>
  );
};

export default Nav;
