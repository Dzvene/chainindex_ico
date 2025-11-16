import { IcoList } from "@components/tokens";

export const TopFeaturedIco = () => {
  return (
    <section className="container flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center text-center text-main">
        <small className="font-semibold">Top Selling</small>
        <h1 className="text-4xl font-bold">Top Featured ICO</h1>
      </div>
      <div className="relative">
        <IcoList />
      </div>
    </section>
  );
};
