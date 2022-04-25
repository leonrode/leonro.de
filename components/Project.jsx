import { FiGithub, FiExternalLink } from "react-icons/fi";

import Link from "next/link";

const Project = ({ imageOnLeft, project }) => {
  const component = [
    <img className="rounded-lg w-full lg:w-1/2" src={project.imageUrl} />,
    <div
      className={`mt-4 lg:mt-0 lg:px-8 flex flex-col justify-center h-full w-full lg:w-1/2`}
    >
      <h1
        className={`mt-4 md:mt-0 text-center lg:text-left text-2xl md:text-3xl text-ellipsis text-text mb-4 font-bold`}
      >
        {project.title}
      </h1>
      <p className={`text-center lg:text-left  text-alt leading-8`}>
        {project.description}
      </p>

      <div className="flex items-center justify-center">
        <div className="mx-2 mt-4 flex w-fit  justify-evenly lg:justify-evenly gap-4 flex-wrap">
          {project.tags.map((tag) => (
            <div key={tag} className="text-text bg-elevated p-2 rounded-lg">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4 lg:mb-0 mt-8 flex justify-center items-center">
        <Link href={project.repoUrl}>
          <FiGithub size={30} className="cursor-pointer text-text" />
        </Link>
        {project.demoUrl && (
          <Link href={project.demoUrl}>
            <FiExternalLink
              size={30}
              className="ml-4 cursor-pointer text-text"
            />
          </Link>
        )}
      </div>
    </div>,
  ];
  return (
    <section className="mb-16 flex-col lg:flex-row flex w-full items-center lg:items-start justify-between">
      {imageOnLeft ? component : component.reverse()}
    </section>
  );
};

export default Project;
