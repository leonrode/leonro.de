const Project = ({ imageOnLeft, project }) => {
  const component = [
    <img className="w-1/2" src={project.imageUrl} />,
    <div>{project.toString()}</div>,
  ];
  return (
    <section className="flex w-full justify-between">
      {imageOnLeft ? component : component.reverse()}
    </section>
  );
};

export default Project;
