import React,{useState,useEffect} from 'react'
import { ethers } from 'ethers'
import  tokenInterface from "/public/Abis/contracts/Token.sol/Token.json"
import { useRouter } from 'next/router'
import Alert from "@mui/material/Alert";
import { UserConnectWalletContext } from "Helpers/MultiWallets";
import { useContext } from "react";
const SendToken = (props) => {
  const UserConnect = useContext(UserConnectWalletContext)

    const router = useRouter();
    const tokenName = "Token Name"
    const tokenAddress=props.children.tokenAddress
    const icoAddress = props.children.icoAddress
    console.log("Toekn Address SEnd Toekn",tokenAddress,icoAddress)
  
  
        //TRANSFER TOKEN
        const transferTokens = async()=>{
  
          if(typeof UserConnect.walletProvider !=="undefined"){
            let contract
            const signer = UserConnect.walletProvider.getSigner()

               contract = new ethers.Contract(tokenAddress,tokenInterface.abi,signer)
  
            console.log(contract)
  
  
               const balance =   await contract.balanceOf(signer.getAddress())
  
               console.log("Admin Token Balance",ethers.utils.formatEther(balance))
      
              try {
                  const sendTransaction = await contract.transfer(icoAddress,balance);
              
                  console.log("sendTransaction :=>" ,sendTransaction)
                  router.push("/marketplace")
  
                      } catch (error) {
                  console.log("error at Send Token TO ICO COntract",error)
              }
      
      
      
          }else{
  
              console.log("Please install metamask wallet")
      
          }
        }
  return (
    <div>
         <Alert severity="warning">
         You Will Send All Total You Have Created To Ico Contract, you can back it to your wallet with END ICO function ...Have A Good Sale :)
        </Alert>
        <div className="ico-step--btn-container">
          <button className="ico-step--btn bg-main" onClick={transferTokens}>
            Send All token to ico contract
          </button>
        </div>
    </div>
  )
}

export default SendToken