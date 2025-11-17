import "@styles/globals.css";
import { UserConnectWalletContext } from "Helpers/MultiWallets";
import { createTheme,ThemeProvider } from '@mui/material/styles'
import connectMultiWallet from "Helpers/MultiWallets";
import { disconnectWallet } from "Helpers/MultiWallets";
import { walletProvider } from "Helpers/MultiWallets";
import { account } from "Helpers/MultiWallets";
const theme =createTheme({
  palette:{
    primary:{
      main:"#F9A829"
    },
    mode:"light"
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <UserConnectWalletContext.Provider value={{connectMultiWallet,disconnectWallet,walletProvider,account}}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </UserConnectWalletContext.Provider>


  )
}

export default MyApp;
