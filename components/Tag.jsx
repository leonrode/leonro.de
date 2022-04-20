const Tag = ({ text }) => {
  return (
    <div className="text-text text-sm lg:text-base rounded-lg font-light bg-elevated w-20 lg:w-28 flex  py-2 items-center justify-center">
      {text}
    </div>
  );
};

export default Tag;
