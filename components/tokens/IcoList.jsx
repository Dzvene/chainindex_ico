import { ICO_DATA } from "./DummyData";
import { Ico } from "./Ico";

export const IcoList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {ICO_DATA.map((item, index) => (
        <Ico key={index} {...item} />
      ))}
    </div>
  );
};
