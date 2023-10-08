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
      </Head>
      <Landing />
    </>
  );
}
