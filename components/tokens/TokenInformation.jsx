import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloudsImage from '@assets/images/clouds.png';

export const TokenInformation = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="label">token information</p>
      <div className="relative information-box">
        {/* CloudsImage */}
        <picture className="absolute top-24 right-24">
          <img src={CloudsImage.src} alt="clouds" />
        </picture>
        <div className="relative z-10 flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl font-bold text-center sm:text-6xl">
            {props.children.tokenName}
          </h1>
          {/* Content */}
          <div className="flex flex-col justify-center items-center gap-10 xl:flex-row xl:items-start">
            {/* TotalSupply */}
            <div className="flex flex-col justify-center items-center gap-2 lg:flex-row">
              <AccountBalanceIcon className="text-4xl text-orange" />
              <div className="flex flex-col items-center gap-2">
                <p className="font-medium text-3xl">TotalSupply</p>
                <small className="font-light text-lg">
                  {props.children.tokenTotalSupply} {props.children.tokenSymbol}
                </small>
              </div>
            </div>
            {/* Contract Address */}
            <div className="flex flex-col items-center gap-2 xl:items-start">
              <p className="font-medium text-3xl text-center xl:text-left">
                Contract Address
              </p>
              <small className="font-light text-xs sm:text-base xl:text-lg">
                {props.children.tokenContract}
              </small>
              <a
                target="_blank"
                href={`https://etherscan.io/address/${props.children.tokenContract}`}
                className="bg-orange text-main px-4 py-2 rounded-full"
              >
                Explore At Etherscan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
