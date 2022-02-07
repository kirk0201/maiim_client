import { GlobalStyle } from "../styles/global-styles";
import type { AppProps } from "next/app";
import Header from "../src/component/layout/app/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
