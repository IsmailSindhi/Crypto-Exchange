import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import axios from "axios";
import { getAllCryptocurrencies } from "../components/apicall";
// component imports
import Hero from "@/components/hero";
import Topbar from "@/components/topbar";
import Exchange from "@/components/exchange";
import Footer from "@/components/footer";
import ModelSend from "@/components/modelsend";
import ModelRecive from "@/components/modelrecive";
import { GetServerSideProps } from "next";
// import {useCurrencies} from "@/lib/hooks"

export default function Home() {
  // const currencies :any = useCurrencies()
  // console.log(currencies)
  // console.log("from index.tsx")

  return (
    <>
      <Head>
        <title>Caxo</title>
        <meta name="description" content="Cryptocurruncy Exchange Made Easy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />
      <div className="w-full justify-center flex flex-col items-center">
        <Hero />
        <ModelSend />
        <ModelRecive/>
        <Exchange />
        {/* <Chart /> */}
      </div>
      <Footer />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}

