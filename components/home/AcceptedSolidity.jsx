import Image from "next/image";
import SolidityImage1 from "@assets/images/solidity1.svg";
import SolidityImage2 from "@assets/images/solidity2.svg";
import SolidityImage3 from "@assets/images/solidity3.svg";
import SolidityImage4 from "@assets/images/solidity4.svg";
import SolidityImage5 from "@assets/images/solidity5.svg";
import SolidityImage6 from "@assets/images/solidity6.svg";
import SolidityImage7 from "@assets/images/solidity7.svg";

const DATA = [
  { alt: "solidity1", src: SolidityImage1 },
  { alt: "solidity2", src: SolidityImage2 },
  { alt: "solidity3", src: SolidityImage3 },
  { alt: "solidity4", src: SolidityImage4 },
  { alt: "solidity5", src: SolidityImage5 },
  { alt: "solidity6", src: SolidityImage6 },
  { alt: "solidity7", src: SolidityImage7 },
];

export const AcceptedSolidity = () => {
  return (
    <div className="container flex flex-col justify-center gap-8 py-8">
      {/* Label */}
      <p className="text-center text-lg font-medium">
        Our marketplace work with all Solidity Accepted
      </p>
      {/* All Accepted Solidity */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {DATA.map((item, index) => (
          <div key={index} className="w-28">
            <Image src={item.src} alt={item.alt} layout="responsive" />
          </div>
        ))}
      </div>
    </div>
  );
};
