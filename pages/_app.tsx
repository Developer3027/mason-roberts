import { ReactElement, ReactNode } from "react";
import type { AppProps } from 'next/app';
import { NextPage } from "next";
import '../styles/globals.css';

export type PageLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type Props = AppProps & {
  Component: PageLayout;
}

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />)
  // return <Component {...pageProps} />;
}

export default MyApp
