import Slide from "react-reveal/Slide";
import { Layout } from "@components/layout";
import { TokenInformation } from "./TokenInformation";
import { IcoInformation } from "./IcoInformation";
import { ProcessToBuy } from "./ProcessToBuy";
import { EndIco } from "./EndIco";
import {React,useState,useEffect} from 'react'
import { useRouter } from "next/router";
import  tokenInterface from "/public/Abis/contracts/Token.sol/Token.json"
import  tokenForSaleInterface from "/public/Abis/contracts/TokenIco.sol/TokenIco.json"
import  marketInterface from "/public/Abis/contracts/IcoMarketplace.sol/IcoMarketplace.json"

import { UserConnectWalletContext } from "../../Helpers/MultiWallets";
import { ethers } from 'ethers'
import { useContext } from "react";
import { MARKETPLACE_ADDRESS } from '../../Helpers/MarketplaceAddress';
export const SingleToken = (props) => {

  const router = useRouter();
  const { icoContract } = router.query;
  const { tokenContract } = router.query;
  const {icoId} = router.query;


  const[loading,setLoading]=useState(false)
  //TOKEN DATA
 const [tokenName,setTokenName]=useState("")
 const [tokenSymbol,setTokenSymbol]=useState("")
 const [tokenTotalSupply,setTokenTotalSupply]=useState("")
 const [tokenContractAddress,setTokenContractAddress]=useState("")
 const [avaiableTokenAtIcoContract,setAvaiableTokenAtIcoContract]= useState("0")

 //MARKET ICO DATA
 const [icoName,setIcoName]=useState()
 const [icoOwner,setIcoOwner]=useState("")
 const [icoImage,setIcoImage]=useState()


 // ICO DATA
 const [icoPricePerUnit,setIcoPricePerUnit]=useState("0")
const[icoBuyCount,setIcoBuyCount]=useState("0")
const[icoTokenRemaindCount,setIcoTokenRemaindCount]=useState("0")
const[icoTokenPercentageSold,setIcoTokenPercentageSold]=useState()
const [icoEthBalance,setIcoEthBalance]=useState()
const [sameAdminLogin,setSameAdminLogin]=useState(false)
const [isAdmin,setIsAdmin]=useState(false)

const UserConnect = useContext(UserConnectWalletContext)

 useEffect( ()=> {
   if(icoId&&icoContract &&tokenContract){
    getTokenData()
    getICOData()
    getMarketDataForSecialIco()
    getAccount()
    adminSameUserLogIn()
   }



    // setIcoTokenRemaindCount( ( tokenTotalSupply - icoBuyCount))
    
 },[icoId&&icoContract &&tokenContract&&icoTokenPercentageSold&&icoTokenRemaindCount&&icoOwner&&UserConnect.walletProvider])

 const getAccount = async ()=>{
    const signer = UserConnect.account
    if(icoOwner === signer){
      setIsAdmin(true)
      console.log("signer", signer)
    }else{
      setIsAdmin(false)
      console.log("signer", signer)
    }



   

 }
const getTokenData = async ()=>{
  getAccount()
      const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.alchemyapi.io/v2/65KmOWadbW5e9_2irZzvsXY284Vu0mRS");
      console.log(provider)
 


       const tokenContracts = new ethers.Contract(tokenContract,tokenInterface.abi,provider)

   
     console.log(tokenContracts)
     
    
setTokenContractAddress(tokenContract)
      try {
        const totalSupply =   await tokenContracts.totalSupply()
        console.log(totalSupply.toLocaleString())
        setTokenTotalSupply(totalSupply.toLocaleString())
        const tokenName =   await tokenContracts.name()
        setTokenName(tokenName)
        const tokenSymbol=await tokenContracts.symbol()
        setTokenSymbol(tokenSymbol)
        const avalibleTokens= await tokenContracts.balanceOf(icoContract)
        console.log("avalibleTokens" ,avalibleTokens.toString())

              } catch (error) {
          console.log("error at get Ico ",error)
      }


}


const getICOData = async ()=>{
  getAccount()

    const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.alchemyapi.io/v2/65KmOWadbW5e9_2irZzvsXY284Vu0mRS");
    console.log(provider)

      let contract = new ethers.Contract(icoContract,tokenForSaleInterface.abi,provider)

     
     
    
    console.log(contract)
      try {
          const price = await contract.tokenPrice();
          setIcoPricePerUnit(price.toString())
    

          const buyCount = await contract.tokensSold()
          setIcoBuyCount(buyCount.toString())
     
          console.log("tokenTotalSupply tokenTotalSupply",tokenTotalSupply)
       

         const remainToken= await contract.getAvaliableBalance()
        console.log(remainToken.toLocaleString())
         setIcoTokenRemaindCount(remainToken.toLocaleString())



          const percentageSold = 100 - (Math.ceil((( tokenTotalSupply - icoBuyCount)/tokenTotalSupply)* 100) )

          setLoading(true)
          console.log("percentageSold",percentageSold.toString() )
          setIcoTokenPercentageSold(percentageSold.toString())

  
          
         

              } catch (error) {
          console.log("error at get Ico ",error)
      }





}

const getMarketDataForSecialIco = async ()=>{

    const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.alchemyapi.io/v2/65KmOWadbW5e9_2irZzvsXY284Vu0mRS");
    console.log(provider)

      let contract = new ethers.Contract(MARKETPLACE_ADDRESS,marketInterface.abi,provider)

     
     
    
    console.log("Market Ico",contract)

      try {
         
        const fetchItem = await contract.idsForMarketItem(icoId)
        console.log(fetchItem.icoName)
        setIcoName(fetchItem.icoName)
        setIcoImage(fetchItem.icoImage)
        setIcoOwner(fetchItem.icoAdmin)
        


              } catch (error) {
          console.log("error at get Ico ",error)
      }





}


//END THE ICO

const adminSameUserLogIn =  async ()=>{

  if(UserConnect.walletProvider !="undefined"){
    try{
      const signer = await UserConnect.walletProvider.getSigner();

      const account =await signer.getAddress()
    
        
      
      console.log("ICo USEEFFECT icoOwner",icoOwner)
    
      console.log("ICo USEEFFECT accountLogin",account)
    
      if(icoOwner.toString() === account){
        setSameAdminLogin(true)
    
        console.log("Admin SAME LOGIN")
      }else{
        setSameAdminLogin(false)
    
      }
    }catch(e){
    
      console.log("user not login to know adminSameUserLogIn" ,e)
    }
  }



}

const endTheICO = async()=>{
  if(typeof UserConnect.walletProvider !=="undefined"){
    let contract


    const signer = await UserConnect.walletProvider.getSigner();
    
       contract = new ethers.Contract(icoContract,tokenForSaleInterface.abi,signer)
      let marketContract = new ethers.Contract(MARKETPLACE_ADDRESS,marketInterface.abi,signer)


    console.log(contract)
  
      try {

 
    
        
          const endIco = await contract.endSale();
          await endIco.wait()
          if(endIco){
            const hiddenSale= await marketContract.changeAvilablity(icoId)
            await hiddenSale.wait()
            router.push("/marketplace")



          }
      

         
   
              } catch (error) {
          console.log("error at endTheICO",error)
      }



  }else{
      console.log("Please install metamask wallet")

  }

}
console.log("icoPricePerUnit",icoPricePerUnit)
  return (
    <Layout>
      <section className="container py-12 flex flex-col gap-4">
        {/* Token Information */}
        <Slide left>
         
          <TokenInformation >{{tokenContract:tokenContract,tokenName:tokenName,tokenTotalSupply:tokenTotalSupply,tokenSymbol:tokenSymbol}}</TokenInformation>
        </Slide>
        {/* Ico Information */}
        <Slide right>
          <IcoInformation >  {{icoPricePerUnit:icoPricePerUnit,icoBuyCount:icoBuyCount,icoTokenRemaindCount:icoTokenRemaindCount,icoOwner:icoOwner,icoContract:icoContract,icoTokenPercentageSold:icoTokenPercentageSold,icoName:icoName,tokenSymbol:tokenSymbol}}</IcoInformation >

        </Slide>
        {/* Process To Buy  */}
        <div className="container">
          <ProcessToBuy >{{icoContract:icoContract,priceValue:icoPricePerUnit,icoFunction:getICOData}}</ProcessToBuy>
        </div>
        {/* End ICO  */}
        {
          sameAdminLogin? <EndIco >{{endIcoFunction:endTheICO}}</EndIco>:""
        }
       
      </section>
    </Layout>
  );
};
