import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Alert from "@mui/material/Alert";
import {React,useState,useEffect,useContext} from 'react'
import  tokenForSaleInterface from "/public/Abis/contracts/TokenIco.sol/TokenIco.json"
import { ethers,BigNumber } from 'ethers'

import { UserConnectWalletContext } from "../../Helpers/MultiWallets";
import toFixed from '../../Helpers/ToFixed'
export const ProcessToBuy = (props) => {
  console.log("PROPSBuy tokenAmountWantToBuy",props)
  const UserConnect = useContext(UserConnectWalletContext)

  const[priceValue,setPriceValue]= useState("0")
  const[tokenAmountWantToBuy,setTokenAmountWantToBuy]= useState("0")
const [totalBuyValue,settotalBuyValue]=useState("0")
const [printTotalCalulate,setPrintTotalCalulate]=useState("0")

const[placeHolder,setPlaceHolder]=useState("Write Number want to buy…")


useEffect(()=>{
  const multi = (Math.floor(tokenAmountWantToBuy.toString())) * (props.children.priceValue)
  // const total = ethers.utils.parseUnits(multi.toString(),decimals).toString()
  //  console.log("convertPrice",convertPrice)

  console.log("Multi",multi)



  // const converPrintValue = ethers.utils.formatEther(multi)
if(tokenAmountWantToBuy>1000){
  
}
  // setPrintTotalCalulate(converPrintValue)
  if(totalBuyValue<=0){
    settotalBuyValue("0")
  }
  settotalBuyValue(toFixed(multi))

},[tokenAmountWantToBuy])

//BUY TOKEN
const buyToken = async()=>{
  if(typeof UserConnect.walletProvider !=="undefined"){
    let contract
      // const provider = new ethers.providers.Web3Provider(UserConnect.walletProvider);
 
         const signer = UserConnect.walletProvider.getSigner()
    
       contract = new ethers.Contract(props.children.icoContract,tokenForSaleInterface.abi,signer)

    console.log(contract)
    console.log("totalBuyValue",totalBuyValue)
          // const numberofTokenNeeded = 6;
          console.log( "tokenAmountWantToBuy  from BUy Function",tokenAmountWantToBuy)
          console.log( "totalBuyValue from Buy Function toFixed ",toFixed(totalBuyValue))
          let totalFloor= Math.floor(tokenAmountWantToBuy.toString())
          console.log("totalFloor",totalFloor)
      try {


        
        const total = toFixed(totalBuyValue)





        const options = {value:total.toString()}

   

        
          const buy = await contract.buyTokens(totalFloor,options);
          setPlaceHolder("0")
          await buy.wait()
          props.children.icoFunction()
          

      
   
              } catch (error) {
          console.log("error at get BUy",error)
      }



  }else{
      console.log("Please install metamask wallet")

  }
}
  return (
    <div className="flex flex-col gap-2">
      <p className="label">Start to Buy Your Favourites Tokens</p>
      <div className="relative flex items-center px-6 py-4 bg-main text-white rounded-full">
      
      
            <input
        
          type="number"
          onChange={(e)=>{setTokenAmountWantToBuy (e.target.value)}}
          placeholder={`${placeHolder}`}
          
          className="w-full bg-transparent placeholder:text-xs md:placeholder:text-base"
        />
    
        <button className="absolute inset-y-0 right-0 px-6 py-4 flex items-center gap-1 bg-orange rounded-r-full rounded-bl-full" onClick={buyToken}>
          <ShoppingCartIcon />
          <p className="hidden md:block">Process To Buy</p>
        </button>
      </div>
      <Alert severity="error">ONLY can buy integer values, we use FLOOR Function ex:3.45 "=>" 3.</Alert>
      <Alert severity="warning">Total Buy Value In WEI is  {totalBuyValue}</Alert>

    </div>
  );
};
