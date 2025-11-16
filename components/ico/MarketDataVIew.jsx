import TextField from "@mui/material/TextField";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Alert from "@mui/material/Alert";
import React ,{useState,useEffect}from "react";
import { useForm } from "hooks/form";
import { ethers } from 'ethers'
import { ContractFactory } from 'ethers';
import  marketInterface from "/public/Abis/contracts/IcoMarketplace.sol/IcoMarketplace.json"

import { create } from 'ipfs-http-client'
import { UserConnectWalletContext } from "Helpers/MultiWallets";
import { useContext } from "react";
import { MARKETPLACE_ADDRESS } from '../../Helpers/MarketplaceAddress';

import SendToken from "./SendToken";


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
export const MarketDataVIew = (props) => {
  const { handleInputFileChange, values } = useForm({ image: "" });
  const UserConnect = useContext(UserConnectWalletContext)

  const [isLunchToMarket,setIsLunchToMarket]=useState(false)
  const [loading, setLoading]=useState(false)
    const [urlHash,setUrlHash] = useState()

    const deployToIpfs = async(e)=>{
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
    const [isIcoCreated,setIsIcoCreated]=useState(false)
    const[icoName,setIcoName]= useState("")
  
    console.log(props)
    let tokenAddressCreation = props.children.newTokenAddress
    let icoContractAddress = props.children.icoContractAddress

    useEffect(()=>{
       tokenAddressCreation = props.children.newTokenAddress
       icoContractAddress = props.children.icoContractAddress
      console.log("the INject Token Address is ",tokenAddressCreation)
      console.log("the INject Token Address is ",icoContractAddress)

    },[tokenAddressCreation,icoContractAddress])
  
  

  
           //ADD ICO TO MARKET
   const addIcoToMarket =  async ()=>{
            if(typeof UserConnect.walletProvider !=="undefined"){
                let marketcontract
                const signer = UserConnect.walletProvider.getSigner()

          
                   marketcontract = new ethers.Contract(MARKETPLACE_ADDRESS,marketInterface.abi,signer)
          
                 
                 
                
                console.log(marketcontract)
                console.log(tokenAddressCreation)
                console.log(icoContractAddress)
          
          
                  try {
        
                    const addIco= await marketcontract.createIcoForSale(tokenAddressCreation,icoContractAddress,urlHash.toString(),icoName)
                    console.log("addIco Created ",addIco)
                    setIsLunchToMarket(true)

                   await  addIco.wait()
        
                    const numberOFICO = await marketcontract.itemId()
                    console.log("numberOFICO",numberOFICO.toString())
        
                          } catch (error) {
                      console.log("error at get Ico Create Token Fourm ",error)
                      setIsLunchToMarket(false)
  
                  }
          
          
          
              }else{
                  console.log("Please install metamask wallet")
          
              }
        
        
        }
  

  return (
    <>
    {
      isLunchToMarket?<SendToken>{{tokenAddress:tokenAddressCreation,icoAddress:icoContractAddress}}</SendToken>:  <div className="ico-step--container">
      <div className="ico-step--box">
        <p className="label">
          Add your token and ico to our market with amazing view{" "}
        </p>
        <div className="ico-step--content">
          <TextField label="Your ICO Name" className="w-full"  onChange={(e)=>{setIcoName (e.target.value)}}/>
          <label
            role="button"
            className="p-4 rounded-md border-2 border-dashed border-orange">
            <input
              type="file"
              name="image"
              onChange={deployToIpfs}
              className="hidden"
              
            />
            {urlHash ? (
              <picture>
                <img
                  src={urlHash}

                  alt="image preview"
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
                />
              </picture>
            ) : (
              <div className="flex justify-center items-center gap-2 text-main-light">
                <p>Select ICO NFT Image Icon</p>
                <CameraAltIcon />
              </div>
            )}
          </label>
          <Alert severity="warning">
            Try to Select Rectangle Image to be good preview
          </Alert>
        </div>
      </div>
      <div className="ico-step--btn-container">
        <button className="ico-step--btn bg-[#f76584]" onClick={addIcoToMarket}>
          Lunch Ico To Market
        </button>
      </div>
    </div>
    }
    </>
  
  );
};
