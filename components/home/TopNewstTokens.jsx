import { NewstTokenList } from "@components/tokens";

export const TopNewstTokens = () => {
  return (
    <section className="container flex flex-col items-center gap-4 lg:items-stretch">
      <h1 className="text-4xl text-center lg:text-left">
        Top Newst Tokens At Market
      </h1>
      <NewstTokenList />
    </section>
  );
};
