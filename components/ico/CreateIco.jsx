import Fade from "react-reveal/Fade";
import { Layout } from "@components/layout";
import Alert from "@mui/material/Alert";
import { MarketDataVIew } from "./MarketDataVIew";
import { AddPrice } from "./AddPrice";
import { CustomizedSteppers } from "./CustomizedSteppers";
import { ProcessToCreateToken } from "./ProcessToCreateToken";
import Cloud1Image from "@assets/images/cloud1.png";
import Cloud2Image from "@assets/images/cloud2.png";
import Cloud3Image from "@assets/images/cloud3.png";




export const CreateIco = () => {
  return (
    <Layout>
      <section className="flex flex-col gap-6 container py-12">
        {/* Intro */}
        <Fade top>
          <div className="relative information-box mb-60 sm:mb-40">
            {/* Cloud 1 Image */}
            <picture className="absolute top-4 right-1/2">
              <img src={Cloud1Image.src} alt="cloud1" />
            </picture>
            {/* Cloud 3 Image */}
            <picture className="absolute top-12 right-[55%]">
              <img src={Cloud3Image.src} alt="cloud3" />
            </picture>
            {/* Cloud 2 Image */}
            <picture className="absolute top-12 right-24">
              <img src={Cloud2Image.src} alt="cloud2" />
            </picture>
            <h1 className="z-10 text-xl font-bold text-center sm:text-2xl 2xl:text-4xl">
              Start To Create your Token and lunch <br /> your ICO to our
              marketplace
            </h1>
            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-full lg:w-5/6">
              <CustomizedSteppers />
            </div>
          </div>
        </Fade>
        <div className="container flex flex-col gap-6">
          {/* Create Your ERC20 Token */}
          <ProcessToCreateToken />

   
        </div>
 
      </section>
    </Layout>
  );
};
