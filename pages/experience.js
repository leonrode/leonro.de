import Layout from "../components/Layout";
import Tag from "../components/Tag";

import projects from "../projects";
import Project from "../components/Project";

import Header from "../components/Header";

import { useState } from "react";

const Experience = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const topTags = [
    "mongodb",
    "python 3",
    "javascript",
    "node.js",
    "tailwindcss",
  ];
  const midTags = ["html", "css", "react.js"];
  const bottomTags = [
    "next.js",
    "aws s3",
    "aws lambda",
    "aws eventbridge",

    "p5.js",
  ];

  const tags = [...topTags, ...midTags, ...bottomTags];

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

        <p className="text-center text-text mt-16">
          Show projects made with any of these techs
        </p>
        <div className="mt-4 mb-24 my-8 flex flex-col w-full items-center">
          <div className="flex justify-center w-full lg:w-3/5 gap-4 flex-wrap">
            {tags.map((tag) => (
              <Tag
                key={tag}
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
            return (
              <Project key={i} imageOnLeft={i % 2 == 1} project={project} />
            );
          }
        })}
      </section>
    </Layout>
  );
};

export default Experience;
