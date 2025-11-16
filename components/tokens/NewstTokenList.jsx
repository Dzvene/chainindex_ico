import { NewstToken } from "./NewstToken";
import { NEWST_TOKEN_DATA } from "./DummyData";

export const NewstTokenList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 xl:justify-between xl:gap-0">
      {NEWST_TOKEN_DATA.map((item, index) => (
        <NewstToken key={index} {...item} />
      ))}
    </div>
  );
};
