// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  const Token = await hre.ethers.getContractFactory("Token");
  const TokenForSale = await hre.ethers.getContractFactory("TokenIco");
  const Marketplace = await hre.ethers.getContractFactory("IcoMarketplace");



  const token = await Token.deploy("bahaa","Bebo",ethers.utils.parseEther("3000"));
  await token.deployed();



  const tokenForSale = await TokenForSale.deploy(token.address,ethers.utils.parseEther("2"));
  const marketplace = await Marketplace.deploy()
   
  //  await tokenForSale.deploy()
  console.log(
    `my  Token Contract Address  deployed to ${token.address} and my  Token For Sale Contract Address  deployed to  ${tokenForSale.address}, marketplace ${marketplace.address}`

  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
