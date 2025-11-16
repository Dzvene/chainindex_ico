import ModeIcon from "@mui/icons-material/Mode";
import MouseIcon from "@mui/icons-material/Mouse";
import Filter2Icon from "@mui/icons-material/Filter2";
import { Input } from "@components/common/input";
import Alert from "@mui/material/Alert";
import { useState,useEffect } from "react";
import { ethers } from 'ethers'
import  tokenInterface from "/public/Abis/contracts/Token.sol/Token.json"
import { ContractFactory } from 'ethers';
import { AddPrice } from "./AddPrice";
import Loader from "@components/common/loader/Loader";
import { useContext } from "react";
import { UserConnectWalletContext } from "Helpers/MultiWallets";

export const ProcessToCreateToken = () => {

  //================>Sates Hooks
const [tokenName,setTokenName]=useState("")
const [tokenSymbol,setTokenSymbol]=useState("")
const [tokenAmount,setTokenAmount]=useState("0")
const [finalTotalSupplyCalculate,setFinalTotalSupplyCalculate] = useState("")
const[tokenAddress,setTokenAddress]=useState("")
const [isTokenCreated,setIsTokenCreated]=useState(false)
const [loading,setLoading]=useState(false)
const UserConnect = useContext(UserConnectWalletContext)

useEffect(()=>{
 
 if(tokenAmount>0){
  const finalNumber = ethers.utils.parseEther(tokenAmount)
  
  console.log(finalNumber.toString())
  setFinalTotalSupplyCalculate(finalNumber.toString())
 } else{
  setFinalTotalSupplyCalculate("0")
 }


},[tokenAmount])


  //================>Create ERc20 Token Functions
const createERC20Token  =  async (name,symbol,amount)=>{
  if (!tokenAmount||!tokenName||!tokenSymbol)return

    if(typeof UserConnect.walletProvider !=="undefined"){
      setLoading(true)

  
      const signer = UserConnect.walletProvider.getSigner()
      try{
  const factory = new ContractFactory(tokenInterface.abi, tokenInterface.bytecode,signer);
     
  console.log("Factory",factory)
  // If your contract requires constructor args, you can specify them here
  const contract = await factory.deploy(name,symbol,amount);
  

  console.log("Token contract.address",contract.address);
  console.log(contract.deployTransaction);
  

  if (contract.deployTransaction){
    setLoading(true)

    setTokenAddress(contract.address)
    setIsTokenCreated(true)

  }
}catch(e){
  const provider = new ethers.providers.Web3Provider(UserConnect.walletProvider);
  console.log(tokenAmount,tokenName,tokenSymbol)
  console.log("you are cancel the create token",provider )
  setLoading(false)

}
     

  
    }else{
        console.log("Please install metamask wallet")
  
    }
  }



  return (
    <>
    {
              isTokenCreated && tokenAddress?<div>
                <AddPrice>{{newTokenAddress:tokenAddress}}</AddPrice>
              </div> :    <div className="ico-step--container">
              <div className="ico-step--box">
                <p className="label">Create Your ERC20 Token</p>
                <div className="ico-step--content">
                  <Input   Icon={ModeIcon} label="Your Token Name"   onChange={(e)=>{setTokenName(e.target.value)}}/>
                  <Input Icon={MouseIcon} label="Your Token Symbol"   onChange={(e)=>{setTokenSymbol (e.target.value)}}/>
                  <Input type="number"  Icon={Filter2Icon} label="Your Token Count"   onChange={(e)=>{setTokenAmount (e.target.value)}}/>
                  <Alert  severity="warning">
                    if you want number in WEI should write {finalTotalSupplyCalculate}
                  </Alert>
                </div>
              </div>
              <div className="ico-step--btn-container">
                {
                  loading?<Loader/>:
               <button className="ico-step--btn bg-green-600" onClick={()=>createERC20Token (tokenName,tokenSymbol,tokenAmount)}>
                  Process to Create Token
                </button>

                }
         

              </div>

            </div>
    }
    </>

  );
};
