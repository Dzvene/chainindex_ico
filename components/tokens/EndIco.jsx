import { useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Modal from "@mui/material/Modal";

export const EndIco = (props) => {
  const [isOpen, setIsOpen] = useState(false);
console.log("End Ico Props",props)
  // Function To Handle Toggle Backdrop
  const handleToggleBackdrop = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={handleToggleBackdrop}
          className="btn-base w-36 bg-[#ea6d6c] text-white px-8 py-4 rounded-r-full rounded-bl-full text-center text-xl">
          End ICO
        </button>
      </div>
      <Modal open={isOpen} onClose={handleToggleBackdrop}>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="relative flex items-center px-6 py-14 bg-white rounded-[3.5rem] z-[60]">
            <div className="absolute inset-y-0 left-0 px-6 py-4 flex items-center justify-center bg-[#ea6d6c] rounded-l-full rounded-br-full">
              <NotificationsActiveIcon
                fontSize="large"
                className="text-white"
              />
            </div>
            <div className="flex flex-col gap-4 text-main pl-24">
              <p className="text-2xl text-center font-medium break-words">
                Are You sure you want to <br /> End the ICO
              </p>
              <div className="flex justify-end items-center gap-2">
                <button
                  className="btn-base py-1 px-4 bg-yellow-400 rounded-full"
                  onClick={handleToggleBackdrop}>
                  no
                </button>
                <button className="btn-base py-1 px-4 bg-yellow-400 rounded-full" onClick={props.children.endIcoFunction}>
                  yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
