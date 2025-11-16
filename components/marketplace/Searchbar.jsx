import { useId } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Searchbar = () => {
  const searchId = useId();

  return (
    <form className="flex space-x-2 items-center py-1 px-2 bg-main-light text-white rounded-md">
      <label htmlFor={searchId}>
        <SearchIcon className="text-4xl" />
      </label>
      <input
        type="text"
        placeholder="Search you favourite Token Name or Token Symbol"
        id={searchId}
        className="flex-1 p-2 outline-none bg-transparent placeholder:text-white placeholder:text-base"
      />
    </form>
  );
};
