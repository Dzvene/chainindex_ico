import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FooterList } from "./FooterList";
import { JoinNewsLatter } from "./JoinNewsLatter";
import { Line } from "@components/common/line";

export const Footer = () => {
  return (
    <footer className="container flex flex-col gap-6">
      {/* Footer Content */}
      <div className="flex flex-col justify-center items-center gap-6 xl:flex-row xl:justify-between xl:items-start">
        {/* Information */}
        <div className="flex flex-col items-center gap-6 xl:items-start">
          <div className="flex flex-col items-center gap-2 xl:items-start">
            <h1 className="font-bold">ICO Marketplace</h1>
            <p className="text-sub">
              Simple innate summer fat <br /> appear basket his desire joy.
            </p>
          </div>
          <div className="flex justify-between items-center gap-3 text-orange">
            <LinkedInIcon />
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
        </div>
        {/* Company */}
        <FooterList
          headline="company"
          list={[
            { name: "about", href: "/" },
            { name: "carers", href: "/" },
            { name: "blog", href: "/" },
            { name: "pricing", href: "/" },
          ]}
        />
        {/* Resources */}
        <FooterList
          headline="resources"
          list={[
            { name: "templates", href: "/" },
            { name: "tutorials", href: "/" },
            { name: "free resources", href: "/" },
            { name: "contract templates", href: "/" },
          ]}
        />
        {/* Join Newsletter */}
        <JoinNewsLatter />
      </div>
      {/* Copy Right */}
      <Line />
      <p className="text-center">
        Copyright @ ICO Marketplace 2022. All Rights Reserved.
      </p>
    </footer>
  );
};
