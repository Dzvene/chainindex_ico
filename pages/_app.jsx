import "@styles/globals.css";
import { UserConnectWalletContext } from "Helpers/MultiWallets";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import connectMultiWallet, { disconnectWallet } from "Helpers/MultiWallets";
import * as MultiWallets from "Helpers/MultiWallets";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F9A829"
    },
    mode: "light"
  },
});

function MyApp({ Component, pageProps }) {
  const contextValue = {
    connectMultiWallet,
    disconnectWallet,
    get walletProvider() {
      return MultiWallets.walletProvider;
    },
    get account() {
      return MultiWallets.account;
    }
  };

  return (
    <UserConnectWalletContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserConnectWalletContext.Provider>
  );
}

export default MyApp;
