import Layout from "../components/Layout";
import Tag from "../components/Tag";
const Experience = () => {
  return (
    <Layout>
      <section className="flex flex-col h-full justify-center items-center">
        <h1 className="text-center font-bold text-primary text-5xl">
          Projects &amp; Skills
        </h1>
        <div className="my-8 flex flex-col w-full items-center">
          <div className="flex items-center w-full lg:w-3/5 justify-between">
            <Tag text="mongodb" />
            <Tag text="python 3" />
            <Tag text="javascript" />
            <Tag text="node.js" />
          </div>
          <div className="my-8 flex items-center w-3/4 lg:w-2/5 justify-between">
            <Tag text="html" />
            <Tag text="css" />
            <Tag text="react.js" />
          </div>
          <div className="flex items-center w-full lg:w-3/5 justify-between">
            <Tag text="next.js" />
            <Tag text="aws s3" />
            <Tag text="socket.io" />
            <Tag text="p5.js" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
