import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import DecoreImage from "@assets/images/Decore.svg";

export const Ico = ({ src, name, wei, icoId, additionalImage = false }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-3xl w-64">
      {/* ICO Image */}
      <div className="object-cover w-full">
        <Image
          src={src}
          alt={name}
          layout="responsive"
          className="rounded-t-3xl"
        />
      </div>
      {/* ICO Information */}
      <div className="flex flex-col gap-2 text-sm text-light px-4 py-6">
        <div className="flex justify-between items-center">
          <p>{name}</p>
          <p>{wei.toString() + " wei"}</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <SendIcon className="w-6 rotate-[315deg]" />
          <small>{icoId}</small>
        </div>
      </div>
      {/* Decore Image */}
      {additionalImage && (
        <picture className="hidden md:block absolute -z-10 -right-1/4 top-[20%]">
          <img src={DecoreImage.src} alt="decore" />
        </picture>
      )}
    </div>
  );
};
