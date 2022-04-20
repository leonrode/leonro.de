import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="h-full flex flex-col items-center justify-center">
        <h1 className="text-center text-text font-light text-5xl">
          Hi, I&apos;m <span className="font-bold text-primary">Leon Rode</span>
        </h1>
        <p className="mt-8 text-2xl font-light text-alt">
          full stack dev &amp; student
        </p>

        <div className="mt-16 px-8 py-2 border-2 border-primary cursor-pointer">
          <span className="text-text font-bold">see my work</span>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
