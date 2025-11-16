import Fade from "react-reveal/Fade";
import { Layout } from "@components/layout";
import { Margin } from "@components/common/margin";
import { TokenList } from "@components/tokens";
import { Searchbar } from "./Searchbar";
import { Welcome } from "./Welcome";

export const Marketplace = () => {
  return (
    <Layout>
      <section className="container py-12">
        <Fade top>
          <Searchbar />
          <Margin>
            <Welcome />
          </Margin>
        </Fade>
        <Margin>
          <TokenList label="recommended for you" />
        </Margin>
      </section>
    </Layout>
  );
};
