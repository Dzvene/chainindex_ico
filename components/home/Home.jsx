import { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Background } from "@components/common/background";
import { Header } from "@components/layout/header";
import { Line } from "@components/common/line";
import { Margin } from "@components/common/margin";
import { Showcase } from "./Showcase";
import { AcceptedSolidity } from "./AcceptedSolidity";
import { CreateTokenSteps } from "./CreateTokenSteps";
import { TopNewstTokens } from "./TopNewstTokens";
import { ExploreFeatures } from "./ExploreFeatures";
import { Help } from "./Help";
import { TopFeaturedIco } from "./TopFeaturedIco";
import { Footer } from "@components/layout/footer";

export const Home = () => {
  return (
    <Fragment>
      <Background image="/landing.png" className="bg-cover md:bg-contain">
        <Header />
        <Showcase />
      </Background>
      <Line />
      <Fade bottom>
        <AcceptedSolidity />
      </Fade>
      <Line />
      <Margin>
        <Fade bottom>
          <CreateTokenSteps />
        </Fade>
      </Margin>
      <Margin values="my-16">
        <Fade bottom>
          <TopNewstTokens />
        </Fade>
      </Margin>
      <Margin>
        <Fade bottom>
          <ExploreFeatures />
        </Fade>
      </Margin>
      <Margin values="my-24">
        <Background image="/featured.png" className="bg-cover bg-center py-10">
          <Fade bottom>
            <Help />
          </Fade>
          <Margin>
            <Fade bottom>
              <TopFeaturedIco />
            </Fade>
          </Margin>
        </Background>
      </Margin>
      <Margin>
        <Fade bottom>
          <Footer />
        </Fade>
      </Margin>
    </Fragment>
  );
};
