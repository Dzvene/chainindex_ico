
import { useContext, useEffect, useState} from "react";

import Image from "next/image";
import AccountImage from "@assets/images/account.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { UserConnectWalletContext } from "Helpers/MultiWallets";
export const Account = ({ col }) => {

  const [isLogin, setIsLogin] = useState(false)
  const [account, setAccount] = useState("")

  const UserConnect = useContext(UserConnectWalletContext)

  const login = async () => {
    try {
      await UserConnect.connectMultiWallet()
      setIsLogin(true)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const logOut = async () => {
    await UserConnect.disconnectWallet()
    setIsLogin(false)
  }

  useEffect(() => {
    if (UserConnect.account) {
      setAccount(UserConnect.account)
      setIsLogin(true)
      console.log("Account Account", UserConnect.walletProvider)
    } else {
      setAccount("")
      setIsLogin(false)
    }
  }, [UserConnect.walletProvider, UserConnect.account])

  console.log(" Account Account UserConnect.Account", UserConnect.account)


  return (
  <>
  {
    isLogin && account?  <div
    className={`sticky top-0 text-main flex flex-col justify-center items-center gap-6 h-screen ${col}`}>
    <div className="w-16 h-16 object-cover">
      <Image src={AccountImage} alt="account" layout="responsive" />
    </div>
    {/* Account Information */}
    <div className="text-center font-medium ">
      <p>Account Address</p>
      <small>{account.slice(0,20)}</small>
    </div>
    {/* Token Creation */}
    <div className="flex flex-col items-center gap-2">
      <EmojiEventsIcon fontSize="large" />
      <p className="text-lg font-semibold">10 Token Creation</p>
    </div>
    {/*  */}
    <div className="flex flex-col items-center gap-2">
      <AccountBalanceWalletIcon className="text-3xl text-green-500" />
      <button  className="btn-base bg-main text-white text-sm rounded-md" onClick={logOut}>
        Logout
      </button>
    </div>
  </div>:  <div
      className={`sticky top-0 text-main flex flex-col justify-center items-center gap-6 h-screen ${col}`}>
      <div className="w-16 h-16 object-cover">
        <Image src={AccountImage} alt="account" layout="responsive" />
      </div>
      {/* Account Information */}
      <div className="text-center font-medium">
        <p>Account Address</p>
        <small>Pleaew connect Wallets</small>
      </div>
      {/* Token Creation */}
      <div className="flex flex-col items-center gap-2">
        <EmojiEventsIcon fontSize="large" />
        <p className="text-lg font-semibold">10 Token Creation</p>
      </div>
      {/*  */}
      <div className="flex flex-col items-center gap-2">
        <AccountBalanceWalletIcon className="text-3xl text-green-500" />
        <button  className="btn-base bg-main text-white text-sm rounded-md" onClick={login}>
          Connect Wallets
        </button>
      </div>
    </div>
  }
  </>
  );
};
