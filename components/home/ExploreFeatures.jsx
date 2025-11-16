import { Background } from "@components/common/background";

export const ExploreFeatures = () => {
  return (
    <div className="container flex justify-center items-center">
      {/* Background Container */}
      <div className="rounded-3xl w-full overflow-hidden lg:w-auto">
        <Background
          image="/explore-features.png"
          className="relative bg-cover bg-center w-full h-[25rem] lg:w-[50rem]">
          {/* Background Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-main bg-opacity-80 text-white text-center">
            <h1 className="text-4xl">Explore Market Features at one Video</h1>
            <p>
              End-to-end payments and financial management in a single <br />{" "}
              solution. Meet the right platform to help realize.
            </p>
            <button className="btn-base px-4 bg-orange rounded-full">
              watch video
            </button>
          </div>
        </Background>
      </div>
    </div>
  );
};
