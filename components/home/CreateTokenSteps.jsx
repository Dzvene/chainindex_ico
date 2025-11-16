import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { StepItem } from "./StepItem";

const DATA = [
  {
    Icon: StarIcon,
    title: "Create Token Details",
  },
  {
    Icon: WorkspacePremiumIcon,
    title: "Lunch your Ico to our Market",
  },
  {
    Icon: TipsAndUpdatesIcon,
    title: "Send all Total Supply to Trade",
  },
];

export const CreateTokenSteps = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-4 px-4 py-8 border border-gray-200 rounded-lg lg:flex-row">
      <p className="font-medium text-center text-2xl break-words lg:text-left">
        Only 3 Steps to <br /> create your{" "}
        <span className="text-highlight">token</span> and <br /> Lunch ICO at
        our <br />
        <span className="text-highlight">Marketplace</span>
      </p>
      {/* Create Token Steps */}
      {DATA.map((item, index) => (
        <StepItem key={index} Icon={item.Icon} title={item.title} />
      ))}
    </div>
  );
};
