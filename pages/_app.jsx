import "@styles/globals.css";
import { UserConnectWalletProvider } from "Helpers/MultiWallets";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: "#F9A829"
    },
    mode: "light"
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <UserConnectWalletProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserConnectWalletProvider>
  )
}

export default MyApp;
