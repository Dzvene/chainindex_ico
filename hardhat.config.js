require("@nomicfoundation/hardhat-toolbox");
 const ALCHEMY_API_KEY = "65KmOWadbW5e9_2irZzvsXY284Vu0mRS"
 const GOERLI_PRIVATE_KEY = ""
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths:{
    artifacts:"./public/Abis"
  },
  allowUnlimitedContractSize: true,
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    hardhat:{
      chainId:31337,
    },
    ganache:{
      url:"https://eth-goerli.alchemyapi.io/v2/65KmOWadbW5e9_2irZzvsXY284Vu0mRS",
      chainId:1337,
      accounts: ["bc31c03fced4ff918df3abe222dd62168d2b46abd978467dd65e3522b5b544e2"]
    },
    }
    
  
  
};
