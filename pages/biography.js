import Layout from "../components/Layout";

import Header from "../components/Header";
import Link from "next/link";
const Biography = () => {
  return (
    <Layout>
      <section className="flex flex-col h-full  items-center">
        <Header text="Biography" />
        <h1 className="text-3xl text-text font-bold my-8">👋 Hi there!</h1>
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <p className="text-text font-light leading-8 text-center">
            I&apos;m Leon, a high school student, full-stack software developer,
            and former freelancer based in New York.
          </p>
          <p className="text-text font-light leading-8 text-center">
            I have been on the programming journey for over seven years,
            building projects in multiple domains. I enjoy building beautiful
            websites, but also exploring low-level programming topics as well.{" "}
            <br />
            Besides websites, I have developed Arduino drivers, procedural art,
            and more.
          </p>

          <p className="text-text font-light leading-8 text-center">
            <br />I applied my skills to Freelancing, where I developed Python
            utilities and websites for multiple clients. <br />
            During the seven months I worked, I completed over eight orders,
            reached close to two-thousand customers, and finished with a perfect
            five-star rating.
          </p>
          <p className="text-text font-light leading-8 text-center">
            <br />
            Aside from developing software, I enjoy playing piano, playing
            games, and hanging out with friends.
          </p>
        </div>

        <Link href="/social">
          <div className="mt-16 px-8 py-2 border-2 border-primary cursor-pointer">
            <span className="text-text font-bold">contact me</span>
          </div>
        </Link>
      </section>
    </Layout>
  );
};

export default Biography;
