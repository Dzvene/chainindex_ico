export const StepItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-center lg:flex-row lg:text-left">
      <div className="p-4 rounded-md bg-[#e9ecf2]">
        {/* Step Icon */}
        <Icon />
      </div>
      {/* Step Title */}
      <p className="text-sub break-words">{title}</p>
    </div>
  );
};
