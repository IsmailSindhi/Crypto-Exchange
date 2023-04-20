import Head from "next/head";
import Script from "next/script";
import Topbar from "@/components/topbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Hero from "@/components/hero";
import Exchange from "@/components/exchange";
import Footer from "@/components/footer";
import { GetServerSideProps } from "next";
import axios from "axios";
import { getAllCryptocurrencies } from "../components/apicall";
import ModelSend from "@/components/modelsend";
import ModelRecive from "@/components/modelrecive";

export default function Home({ data }: any) {
  console.log(data);
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
        <ModelSend data={data}/>
        <ModelRecive data={data}/>
        <Exchange />
        {/* <Chart /> */}
      </div>
      <Footer />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}
export const getServerSideProps = async () => {
  try {
    const response = await axios.get("https://api.easybit.com/currencyList", {
      headers: { "API-KEY": "test_G5Qe3HIcf0vxqesnfDeT7e2Ma" },
    });
    const data = response.data.data;
    if (response.data.success === 1){
      // console.log(data[170])
    
    return {
      props: {
        data,
      },
    };
  }} catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
  //  let data = getAllCryptocurrencies()
  //  data = JSON.parse(JSON.stringify(data))
  //  console.log(data)
};
