import Fade from "react-reveal/Fade";
import Image from "next/image";
import WelcomeImage from "@assets/images/welcome.svg";
import Link from "next/link";

export const Welcome = () => {
  return (
    <div className="information-box flex flex-col justify-center items-center gap-8 lg:flex-row lg:justify-between lg:items-center">
      {/* Information */}
      <div className="flex flex-col items-center gap-4 break-words lg:items-start">
        <h1 className="text-2xl font-bold">Welcome to our Market</h1>
        <p className="font-medium">
          Here is a customised Erc20 <br /> Tokens for Buy and sell.
        </p>
        <Link href="/create-ico">
        <button className="btn-base rounded-full px-6 bg-[#242a4b]">
          create token
        </button>
        </Link>
      
      </div>
      {/* Image */}
      <Fade right>
        <div className="flex-1 w-44">
          <Image src={WelcomeImage} alt="welcome" layout="responsive" />
        </div>
      </Fade>
    </div>
  );
};
