import { Progress } from '@components/common/progress';
import SpaIcon from '@mui/icons-material/Spa';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Cloud1Image from '@assets/images/cloud1.png';
import Cloud2Image from '@assets/images/cloud2.png';
import Cloud3Image from '@assets/images/cloud3.png';
import LinearProgress from '@mui/material/LinearProgress';

export const IcoInformation = (props) => {
  console.log('props at ico informtion', props);
  return (
    <div className="flex flex-col gap-2">
      <p className="label">Ico {props.children[1].icoName} Information</p>
      <div className="relative information-box">
        {/* Sold Tokens */}
        {/* Cloud 3 Image  */}
        <picture className="absolute top-4 right-[35%]">
          <img src={Cloud3Image.src} alt="cloud3" />
        </picture>
        {/* Cloud 2 Image  */}
        <picture className="absolute top-24 right-10">
          <img src={Cloud2Image.src} alt="cloud2" />
        </picture>
        {/* Cloud 1 Image  */}
        <picture className="absolute top-52 right-10">
          <img src={Cloud1Image.src} alt="cloud1" />
        </picture>
        <div className="relative flex flex-col justify-center items-center gap-4 z-10">
          <h1 className="text-3xl font-bold text-center sm:text-4xl">
            <span className="text-orange">
              {props.children[1].icoTokenRemaindCount}
            </span>{' '}
            Avaliable Tokens Number
          </h1>
          <h1 className="text-3xl font-bold text-center sm:text-4xl">
            <span className="text-orange">{props.children[1].icoBuyCount}</span>{' '}
            Sold Tokens Number
          </h1>
          <div className="flex items-center gap-1">
            <SpaIcon className="text-orange" />
            <p className="font-semibold uppercase text-xl">
              {/* Sold Percentage */}1 {props.children[1].tokenSymbol} ={' '}
              {props.children[1].icoPricePerUnit} WEI
            </p>
          </div>
          <div className="container">
            <LinearProgress
              variant="determinate"
              color="primary"
              sx={{
                margin: '10px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
              }}
              value={props.children[1].icoTokenPercentageSold}
            />
          </div>

          <span className="capitalize text-center text-base font-medium">
            {props.children[1].icoTokenPercentageSold}% sold
          </span>
          {/* Owner Address */}
          <div className="flex flex-col items-center gap-1 rounded-lg py-2 px-6 bg-orange text-main sm:flex-row sm:rounded-full">
            <AccountBalanceWalletIcon className="text-green-500" />
            <a
              className="text-center text-sm break-words sm:text-left"
              target="_blank"
              href={`https://etherscan.io/address/${props.children[1].icoContract}`}
            >
              Contract Address : {props.children[1].icoContract}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
