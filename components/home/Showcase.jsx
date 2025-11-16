import Image from "next/image";
import Fade from "react-reveal/Fade";
import ShowcaseImage from "@assets/images/showcase.svg";
import TypeWriterEffect from "typewriter-effect";
import Link from "next/link";
export const Showcase = () => {
  return (
    <div className="py-10 xl:py-0">
      <div className="container flex flex-col justify-center items-center gap-2 xl:flex-row xl:justify-between xl:gap-0">
        {/* Showcase Content */}
        <Fade left>
          <div className="flex flex-col items-center gap-16 xl:items-start break-words">
            {/* Content Information */}
            <div className="flex flex-col text-center items-center gap-2 xl:text-left xl:items-start">
              <h1 className="text-5xl font-normal">
                <TypeWriterEffect
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Create Your ERC20 Token and Lunch Your ICO")
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </h1>
              <p className="text-2xl text-sub">
                Will find all erc20 at your marketplace and can buy and sell any
                token with all Evm Crypto Currency.
              </p>
            </div>
            {/* Content Buttons */}
            <div className="flex flex-col justify-center items-center gap-8 xl:flex-row xl:justify-between">
              <Link href="/marketplace">
              <button className="btn-base text-white text-xl bg-main w-64">
                explore marketplace
              </button>
              </Link>
              <Link href="/create-ico">
              <button className="btn-base text-xl bg-orange w-64">
                create token
              </button>
              </Link>
   
              
            </div>
          </div>
        </Fade>
        {/* Showcase Images */}
        <Fade top>
          <div className="w-80 md:w-[36rem] lg:w-[60rem] 2xl:w-[70rem]">
            <Image
              src={ShowcaseImage}
              alt="showcase image"
              layout="responsive"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};
