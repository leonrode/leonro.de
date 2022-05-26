const Tag = ({ text, selected, toSelect, toDeselect, clickHandler }) => {
  return (
    <div
      onClick={() => clickHandler(text)}
      className={`border-2 hover:border-primary ${
        selected ? "border-[3px] border-primary" : "border-transparent"
      }  cursor-pointer transition text-text text-center text-sm lg:text-base rounded-lg  bg-elevated w-24 lg:w-36 flex  py-2 items-center justify-center`}
    >
      {text}
    </div>
  );
};

export default Tag;
