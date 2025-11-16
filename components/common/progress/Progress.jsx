export const Progress = ({ complete }) => {
  return (
    <div className="bg-white w-full h-5">
      <div
        style={{ width: complete }}
        className="progress bg-orange h-full"></div>
    </div>
  );
};
