import { useId } from "react";

export const JoinNewsLatter = () => {
  const newsLatterId = useId();

  return (
    <div className="flex flex-col items-center gap-2 xl:items-start">
      {/* Newslatter Label */}
      <label htmlFor={newsLatterId} className="capitalize font-bold text-xl">
        Join Our Newsletter
      </label>
      {/* Newslatter Input */}
      <div className="flex items-center">
        <input
          type="text"
          id={newsLatterId}
          placeholder="your email"
          className="px-4 py-2 w-3/4 placeholder:capitalize placeholder:text-gray-400 bg-[#f9f9f9] outline-none"
        />
        <button className="btn-base bg-orange text-white px-4 py-2">
          subscribe
        </button>
      </div>
      {/* Additional Information */}
      <p className="text-sub text-center text-xs xl:text-left">
        * Will send you weekly updates for your better finance management.
      </p>
    </div>
  );
};
