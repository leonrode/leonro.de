const Tag = ({ text, selected, toSelect, toDeselect, clickHandler }) => {
  return (
    <div
      onClick={() => clickHandler(text)}
      className={`border-2 hover:border-primary ${
        selected ? "border-primary" : "border-transparent"
      }  transition text-text text-sm lg:text-base rounded-lg font-light bg-elevated w-20 lg:w-28 flex  py-2 items-center justify-center`}
    >
      {text}
    </div>
  );
};

export default Tag;
