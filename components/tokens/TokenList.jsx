import { TokenItem } from "./TokenItem";
import { TOKEN_DATA } from "./DummyData";
import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useState } from 'react'
import  marketInterface from "../../public/Abis/contracts/IcoMarketplace.sol/IcoMarketplace.json"
import { Typography } from '@mui/material'
import Link from 'next/link'
import  useMediaQuery  from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { MARKETPLACE_ADDRESS } from '../../Helpers/MarketplaceAddress'
export const TokenList = ({ label }) => {

  const theme = useTheme()
  const matches =useMediaQuery(theme.breakpoints.down("sm"))
  const[icoAvaliableItems,setIcoAvaliableItems]= useState([])
  useEffect(()=>{
    getAllAvilableIcos();
  },[])


  const getAllAvilableIcos =  async()=>{
  
        let marketcontract
        const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.alchemyapi.io/v2/65KmOWadbW5e9_2irZzvsXY284Vu0mRS");
        
        console.log(provider)
        const chainId =  await provider.getNetwork()
        console.log(chainId.chainId)
        const signer = provider.getSigner()
  
           marketcontract = new ethers.Contract(MARKETPLACE_ADDRESS,marketInterface.abi,provider)
  
         
         
        
        console.log(marketcontract)
  
          try {

            const listOfAvaliableIcos = await marketcontract.getAllAvaliableICOs()
            console.log("listOfAvaliableIcos from function",listOfAvaliableIcos)
            setIcoAvaliableItems(listOfAvaliableIcos)

                  } catch (error) {
              console.log("error at get Ico ITEMS ",error)
          }
  
  
  
      
}
  
  return (
    <div className="flex flex-col gap-4">
      <p className="label">{label}</p>
      {
        icoAvaliableItems.length>0?      <div className="flex flex-wrap justify-center items-center gap-6 lg:grid lg:grid-cols-2 2xl:grid-cols-3">
        {icoAvaliableItems.map((item) => (
          <TokenItem key={item.icoId} {...item} />
        ))}
      </div>:      <div className="flex flex-wrap justify-center items-center gap-6 lg:grid lg:grid-cols-2 2xl:grid-cols-3">

        <Typography >NO ICO AVALIABLE</Typography>
     
      </div>
      }

    </div>
  );
};
