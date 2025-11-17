import WalletConnectProvider from "@walletconnect/web3-provider"
import Web3Modal from "web3modal"
import Authereum from "authereum"
import { ethers } from 'ethers'
import { createContext, useState, useEffect, useCallback } from "react"

export const UserConnectWalletContext = createContext();

const walletOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "47b829e7e62f4ccfa9fe9dbd1bde1714"
    }
  },
  binancechainwallet: {
    package: true
  },
  authereum: {
    package: Authereum
  },
};

let web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "goerli",
    cacheProvider: true,
    theme: "light",
    providerOptions: walletOptions
  });
}

export const UserConnectWalletProvider = ({ children }) => {
  const [walletProvider, setWalletProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectMultiWallet = useCallback(async () => {
    if (isConnecting) {
      console.log("Connection already in progress");
      return;
    }

    if (!web3Modal) {
      console.error("Web3Modal not initialized");
      return;
    }

    try {
      setIsConnecting(true);
      const instance = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      setWalletProvider(provider);
      setAccount(address);

      console.log("Connected account:", address);
      return { account: address };
    } catch (error) {
      console.log("Connection cancelled or failed:", error);
      setWalletProvider(null);
      setAccount(null);
    } finally {
      setIsConnecting(false);
    }
  }, [isConnecting]);

  const disconnectWallet = useCallback(async () => {
    if (!web3Modal) {
      return;
    }

    try {
      await web3Modal.clearCachedProvider();
      setWalletProvider(null);
      setAccount(null);
      console.log("Wallet disconnected");
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  }, []);

  // Auto-connect if cached provider exists
  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider && !account && !isConnecting) {
      connectMultiWallet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserConnectWalletContext.Provider
      value={{
        connectMultiWallet,
        disconnectWallet,
        walletProvider,
        account,
        isConnecting
      }}
    >
      {children}
    </UserConnectWalletContext.Provider>
  );
};

// Legacy exports for backward compatibility
export let walletProvider = null;
export let account = null;

const connectMultiWallet = async () => {
  if (!web3Modal) {
    return;
  }

  try {
    const instance = await web3Modal.connect();
    walletProvider = new ethers.providers.Web3Provider(instance);
    const signer = walletProvider.getSigner();
    account = await signer.getAddress();

    console.log("We come from Multi wallet Page Account", account);
    return { account: account };
  } catch (error) {
    console.log("You are Cancel the login");
  }
};

export default connectMultiWallet;

export const disconnectWallet = async () => {
  if (!web3Modal) {
    return;
  }

  const dis = await web3Modal.clearCachedProvider();
  walletProvider = null;
  account = null;
  console.log(dis, walletProvider, account);
};
