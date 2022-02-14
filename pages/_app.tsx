import { GlobalStyle } from "../styles/global-styles";
import type { AppProps } from "next/app";
import Header from "../src/component/layout/main/Header";
import NavBar from "../src/component/common/NavBar";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {/* <NavBar /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
