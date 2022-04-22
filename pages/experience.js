import Layout from "../components/Layout";
import Tag from "../components/Tag";

import projects from "../projects";
import Project from "../components/Project";

import { useState } from "react";

const Experience = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <Layout>
      <section className="flex flex-col h-full  items-center">
        <h1 className="text-center font-bold text-primary text-5xl">
          Projects &amp; Skills
        </h1>
        <p className="text-alt mt-16">Filter projects by tech</p>
        <div className="mt-4 mb-48 my-8 flex flex-col w-full items-center">
          <div className="flex items-center w-full md:w-3/4 lg:w-2/5 justify-between">
            <Tag text="mongodb" />
            <Tag text="python 3" />
            <Tag text="javascript" />
            <Tag text="node.js" />
          </div>
          <div className="my-8 flex items-center w-3/4 md:w-1/2 lg:w-3/12 justify-between">
            <Tag text="html" />
            <Tag text="css" />
            <Tag text="react.js" />
          </div>
          <div className="flex items-center w-full md:w-3/4 lg:w-2/5 justify-between">
            <Tag text="next.js" />
            <Tag text="aws s3" />
            <Tag text="tailwindcss" />
            <Tag text="p5.js" />
          </div>
        </div>
        {projects.map((project, i) => (
          <Project imageOnLeft={i % 2 == 1} project={project} />
        ))}
      </section>
    </Layout>
  );
};

export default Experience;
