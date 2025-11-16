import { Account } from "./account";
import { Sidebar } from "./sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#f5f8ff]">
      <div className="flex flex-col lg:grid lg:grid-cols-12 2xl:container">
        {/* Sidebar */}
        <Sidebar col="col-span-2" />
        {/* Main Content */}
        <main className="col-span-8 bg-white rounded-l-[6rem] overflow-y-auto">
          {children}
        </main>
        {/* Account */}
        <Account col="col-span-2" />
      </div>
    </div>
  );
};
