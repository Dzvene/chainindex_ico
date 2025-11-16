import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import React, { useEffect,useState } from 'react'
import  tokenForSaleInterface from "/public/Abis/contracts/TokenIco.sol/TokenIco.json"
import { ethers } from 'ethers'
import { ContractFactory } from 'ethers';
import  marketInterface from "/public/Abis/contracts/IcoMarketplace.sol/IcoMarketplace.json"

import { create } from 'ipfs-http-client'
import toFixed from '../../Helpers/ToFixed';
import CircularProgress from '@mui/material/CircularProgress';
import Loader from "@components/common/loader/Loader";
import { MarketDataVIew } from "./MarketDataVIew";
import { UserConnectWalletContext } from "Helpers/MultiWallets";
import { useContext } from "react";
//Change  THis projectId  with yours 

const projectId = '2DAWGvVXOCNIC399kGfZ64Wwcpc';
//Cahneg THis projectSecret  with yours 

const projectSecret = '5246faece5a85cca47ffd4001842d482';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const options = {
    host: 'ipfs.infura.io',
    protocol: 'https',
    port: 5001,
    apiPath: '/api/v0',
    headers: {
        authorization: auth,
    },
};
//Change THis dedicateEndPoint  with yours 
const dedicateEndPoint = 'https://mrbebo.infura-ipfs.io/ipfs'
const ipfsClient = create(options);

/////////////////////=>


export const AddPrice = (props) => {
  const UserConnect = useContext(UserConnectWalletContext)

  const [isLunchToMarket,setIsLunchToMarket]=useState(false)
const [loading, setLoading]=useState(false)
  const [urlHash,setUrlHash] = useState()
  const onChange = async(e)=>{
      //e.preventDefault();
      const file = e.target.files[0];
      console.log("before")
      setLoading(true)

      try{
          console.log("after try")
          const addedFile = await ipfsClient.add(file);
          const ipfsUrl = `${dedicateEndPoint}/${addedFile.path}`;
          setUrlHash(ipfsUrl)
          console.log('ipfsUrl:', ipfsUrl)
          setLoading(false)

      }catch(e){
          console.log(e)
          setLoading(false)

      }

  }


  const[tokenPrice,setTokenPrice]=useState("0")
  const[icoContractAddress,setIcoContractAddress]=useState("")
  const [isIcoCreated,setIsIcoCreated]=useState(false)
  const[icoName,setIcoName]= useState("")

  console.log(props)
  let tokenAddressCreation = props.children.newTokenAddress
  useEffect(()=>{
     tokenAddressCreation = props.children.newTokenAddress
    console.log("the INject Token Address is ",tokenAddressCreation)
  },[tokenAddressCreation])



   //Lunch The ICO WITH Price
  const lunchTheICO =  async()=>{


    if(tokenAddressCreation){
     try{
       if(typeof UserConnect.walletProvider !=="undefined") {

       setLoading(true)

       const signer = UserConnect.walletProvider.getSigner()
         const factoryForSale = new ContractFactory(tokenForSaleInterface.abi, tokenForSaleInterface.bytecode,signer);

    
         console.log("factoryForSale",factoryForSale)
         // If your contract requires constructor args, you can specify them here

         console.log("ethers.utils.parseEther 0.3",(tokenPrice).toString())
         // console.log("ethers.utils.formatEther 0.3",ethers.utils.formatEther(tokenPrice).toString())

         const forSaleContract = await factoryForSale.deploy(tokenAddressCreation,tokenPrice);
          
         
        
       

         //TO DO Create ICO Name and Image 
         console.log(" ICO contract.address",forSaleContract.address);
         console.log(forSaleContract.deployTransaction);

    if(  forSaleContract.deployTransaction) {
      setIcoContractAddress(forSaleContract.address)

               //TO DO Create ICO Name and Image 
               console.log(" ICO contract.address",forSaleContract.address);
               console.log(forSaleContract.deployTransaction);
               setIsIcoCreated(true)
    }
        
      
     

       
       
       
     

       }

     }catch(e){
     
      setLoading(false)

       console.log(e)
     }
    }else{
      setIsIcoCreated(false)
      setLoading(false)

    }

  
   }





  return (
    <>
    {
      isIcoCreated?<MarketDataVIew>{{newTokenAddress:tokenAddressCreation,icoContractAddress:icoContractAddress}}</MarketDataVIew>:    <div className="ico-step--container">
      <div className="ico-step--box">
        <p className="label">Add the price for each one token in Wei</p>
        <div className="ico-step--content">
          <TextField
            label="Price For One Token in WEI"
            type="number"
            className="w-full"
            onChange={(e)=>{setTokenPrice (e.target.value)}}
          />
          <Alert severity="error">1 Token = {toFixed(tokenPrice)} in wei</Alert>
          <Alert severity="error">100 Token = {toFixed(tokenPrice*100)} in wei</Alert>

        </div>
      </div>
      <div className="ico-step--btn-container">
        {
          loading? <Loader/>   :    <button className="ico-step--btn bg-orange" onClick={lunchTheICO}>Create ICO Contract</button>

        }
      </div>
    </div>
    }
    </>

  );
};
