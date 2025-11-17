import WalletConnectProvider from "@walletconnect/web3-provider"
import Web3Modal from "web3modal"
import Authereum from "authereum"
import { ethers } from 'ethers'
import { createContext } from "react"

export const UserConnectWalletContext = createContext();


  const walletOptions= {

    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "47b829e7e62f4ccfa9fe9dbd1bde1714" // required
      }
    },
    binancechainwallet: {
      package: true
    },
    authereum: {
      package: Authereum // required
    },
  

  };
 let  web3Modal
  if (typeof window !== "undefined") {
     web3Modal = new Web3Modal({
      network: "goerli", // optional
      cacheProvider: true,
      theme:"light", 
      providerOptions:walletOptions // required
    });
  }

 


  export let walletProvider
  

  export let account;

  const connectMultiWallet = async ()=>{

   try {
     
    const instance = await web3Modal.connect();

    walletProvider = new ethers.providers.Web3Provider(instance);
    const signer = walletProvider.getSigner();
    account= await signer.getAddress()

    console.log("We come from Multi wallet Page Account",account)
    return({
      account:account
    })


   } catch (error) {
     console.log("You are Cancel the login")
   }  
  
  }

  export default connectMultiWallet;



  export const disconnectWallet =  async()=>{
    const dis= await web3Modal.clearCachedProvider()
    walletProvider=null
    account=null
    console.log(dis,walletProvider,account)
  }


