import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Landing from "./landing/landing";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Knoweth</title>
        <meta name="description" content="Knoweth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=330339189469759" nonce="mkpYiHUY"></script>
      </Head>
      <Landing />
    </>
  );
}
