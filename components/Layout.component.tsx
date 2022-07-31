import Head from "next/head";
import Navbar from "./TopNav.component";
import Footer from "./Footer.component";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Mason Roberts | Dev3027</title>
        <meta name="description" content="Mason Roberts site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}