import Layout from "../components/Layout";
import Tag from "../components/Tag";

import projects from "../projects";
import Project from "../components/Project";

import Header from "../components/Header";

import { useState } from "react";

const Experience = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const topTags = ["mongodb", "python 3", "javascript", "node.js"];
  const midTags = ["html", "css", "react.js"];
  const bottomTags = ["next.js", "aws s3", "tailwindcss", "p5.js"];

  const onTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prev) => prev.filter((e) => e !== tag));
    } else {
      setSelectedTags((prev) => [...prev, tag]);
    }
  };
  return (
    <Layout>
      <section className="flex flex-col h-full  items-center">
        <Header text="Projects &amp; Skills" />

        <p className="text-center text-alt mt-16">
          Show public projects made with any of these techs
        </p>
        <div className="mt-4 mb-24 my-8 flex flex-col w-full items-center">
          <div className="flex items-center w-full md:w-3/4 lg:w-2/5 justify-between">
            {topTags.map((tag) => (
              <Tag
                text={tag}
                clickHandler={onTagClick}
                selected={selectedTags.includes(tag)}
              />
            ))}
          </div>
          <div className="my-8 flex items-center w-3/4 md:w-1/2 lg:w-3/12 justify-between">
            {midTags.map((tag) => (
              <Tag
                text={tag}
                clickHandler={onTagClick}
                selected={selectedTags.includes(tag)}
              />
            ))}
          </div>
          <div className="flex items-center w-full md:w-3/4 lg:w-2/5 justify-between">
            {bottomTags.map((tag) => (
              <Tag
                text={tag}
                clickHandler={onTagClick}
                selected={selectedTags.includes(tag)}
              />
            ))}
          </div>
        </div>
        {projects.map((project, i) => {
          if (
            selectedTags.length === 0 ||
            selectedTags.some((tag) => project.tags.includes(tag))
          ) {
            return <Project imageOnLeft={i % 2 == 1} project={project} />;
          }
        })}
      </section>
    </Layout>
  );
};

export default Experience;
