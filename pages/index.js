import Layout from "../components/Layout";

import Link from "next/link";

import Header from "../components/Header";

const Home = () => {
  return (
    <Layout>
      <section className="h-full flex flex-col items-center justify-center">
        <h1 className="text-center text-text font-light text-5xl">
          Hi, I&apos;m{" "}
          <span className="font-bold bg-gradient-to-r py-2 from-primary to-darkPrimary bg-clip-text text-transparent">
            Leon Rode
          </span>
          {/* Hi, I&apos;m <Header className="font-bold text-primary">Leon Rode</span> */}
        </h1>
        <p className="mt-8 text-2xl font-light text-alt">
          full stack dev &amp; student
        </p>

        <Link href="/experience">
          <div className="mt-16 px-8 py-2 border-2 border-primary cursor-pointer">
            <span className="text-text font-bold">see my work</span>
          </div>
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
