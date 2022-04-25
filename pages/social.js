import Layout from "../components/Layout";

import Header from "../components/Header";

import Link from "next/link";

import { FiInstagram, FiGithub, FiTwitter } from "react-icons/fi";
const Social = () => {
  return (
    <Layout>
      <section className="flex flex-col h-full  items-center">
        <Header text="Social" />
        <p className="text-text text-xl mt-8">
          Let&apos;s connect through any of these platforms
        </p>
        <div className="mt-8 h-32 flex flex-col items-center justify-between">
          <h1 className="text-2xl flex items-center text-[#dd2a7b] font-bold">
            <FiInstagram size={30} className="mr-2" />{" "}
            <Link href="https://instagram.com/leonro.de">Instagram</Link>
          </h1>
          <h1 className="text-2xl flex items-center text-[#eef1f3] font-bold">
            <FiGithub size={30} className="mr-2" />{" "}
            <Link href="https://github.com/leonrode">GitHub</Link>
          </h1>
          <h1 className="text-2xl flex items-center text-[#1da1f2] font-bold">
            <FiTwitter size={30} className="mr-2" />{" "}
            <Link href="https://twitter.com/leonrode221">Twitter</Link>
          </h1>
        </div>
        <div className="mt-8 flex items-start text-text text-xl font-light ">
          or
          <div className="ml-1 font-normal group flex flex-col text-text text-xl ">
            <Link href="mailto:leon.rode13@gmail.com">send me an email.</Link>
            <span className="group-hover:w-full w-0 transition-[width] bg-gradient-to-r from-primary to-darkPrimary  h-[2px]"></span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Social;
