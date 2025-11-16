import TokenIcon from "@mui/icons-material/Token";
import Rating from "@mui/material/Rating";

export const NewstToken = ({ src, title, name, bh, rate }) => {
  return (
    <div className="shadow-lg shadow-main rounded-[5rem]">
      {/* Token Image */}
      <picture className="relative">
        <img
          src={src}
          alt={title}
          className="w-[18rem] h-[25rem] object-cover rounded-[5rem]"
        />
        {/* Token Details */}
        <div className="text-white">
          <p className="absolute top-2 left-1/2 -translate-x-1/2 uppercase font-bold">
            {title}
          </p>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-1">
            <TokenIcon />
            <p className="capitalize font-bold">{name}</p>
            <Rating name="disabled" value={rate} readOnly />
            <small>{bh} BH</small>
          </div>
        </div>
      </picture>
    </div>
  );
};
