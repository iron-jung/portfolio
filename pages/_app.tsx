import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import useIsPageLoading from "../hooks/useIsPageLoading";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const isPageLoading = useIsPageLoading();

  return <>{isPageLoading ? <Loading /> : <Component {...pageProps} />}</>;
}

export default MyApp;
