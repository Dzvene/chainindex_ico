import Fade from 'react-reveal/Fade';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useRouter } from 'next/router';
import tokenInterface from '/public/Abis/contracts/Token.sol/Token.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export const TokenItem = ({
  icoId,
  icoImage,
  icoName,
  tokenContract,
  icoAdmin,
  icoContract,
}) => {
  const router = useRouter();

  //TOKEN DATA
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenTotalSupply, setTokenTotalSupply] = useState('');

  const getTokenData = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://eth-goerli.alchemyapi.io/v2/65KmOWadbW5e9_2irZzvsXY284Vu0mRS'
    );
    console.log('getTokenDatap', provider);

    const tokenContracts = new ethers.Contract(
      tokenContract,
      tokenInterface.abi,
      provider
    );

    console.log(tokenContracts);

    try {
      const totalSupply = await tokenContracts.totalSupply();
      console.log(totalSupply.toLocaleString());
      setTokenTotalSupply(totalSupply.toLocaleString());
      const tokenName = await tokenContracts.name();
      setTokenName(tokenName);
      const tokenSymbol = await tokenContracts.symbol();
      setTokenSymbol(tokenSymbol);
      const avalibleTokens = await tokenContracts.balanceOf(icoContract);
      console.log('avalibleTokens', avalibleTokens.toString());
    } catch (error) {
      console.log('error at get Ico ', error);
    }
  };
  useEffect(() => {
    getTokenData();
  }, []);

  return (
    <Fade bottom>
      <div className="flex items-end gap-3">
        {/* Token Image */}
        <picture>
          <img
            src={icoImage}
            alt={icoName}
            className="w-32 h-52 object-cover shadow-xl"
          />
        </picture>
        {/* Token Content */}
        <div className="flex flex-col gap-2 text-main">
          {/* Token Title */}
          <p className="font-medium text-base 2xl:text-sm">
            {' '}
            {icoName.substring(0, 15)}
          </p>
          {/* Token By */}
          <div className="text-xs flex items-center gap-2">
            <AccountBalanceWalletIcon className="text-orange" />
            <span className="text-sub">by {icoAdmin.slice(0, 9)}</span>
          </div>
          {/* Token Name */}
          <p className="font-medium text-base 2xl:text-sm">
            {tokenName.substring(0, 10)}
          </p>
          {/* Token BN */}
          <div className="text-xs flex items-center gap-2">
            <AccountBalanceIcon className="text-orange" />
            <span className="text-sub">
              {tokenTotalSupply} {tokenSymbol}
            </span>
          </div>
          {/* Token Button */}
          <Link
            href={{
              pathname: `/marketplace/${icoContract}/`,
              query: {
                tokenContract: `${tokenContract}`,
                icoContract: `${icoContract}`,
                icoId: `${icoId}`,
              },
            }}
          >
            <button className="btn-base bg-main text-white w-full rounded-full">
              explore
            </button>
          </Link>
        </div>
      </div>
    </Fade>
  );
};
