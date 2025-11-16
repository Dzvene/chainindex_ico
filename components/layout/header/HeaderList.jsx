import { useRouter } from "next/router";
 import connectMultiWallet from "Helpers/MultiWallets";
 import { disconnectWallet } from 'Helpers/MultiWallets'
import { UserConnectWalletContext } from "Helpers/MultiWallets";
import  {useState,useEffect,useContext} from"react"
export const HeaderList = () => {
  const router = useRouter();
  const UserConnect = useContext(UserConnectWalletContext)

  // Function To Handle Navigate
  const handleNavigate = (path) => {
    return () => router.push(path);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 p-4 sm:flex-row sm:p-0">
      <button
        onClick={handleNavigate("/marketplace")}
        className=" btn-base bg-main text-white rounded-md btn-base">
        marketplace
      </button>
   
     
    </div>
  );
};
