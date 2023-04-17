import { IoMdClose } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
// import { getAllCryptocurrencies } from "./apicall";
export default function Model(data: any) {
  const modelc: boolean = true;
  const show: string = modelc ? "flex" : "hidden";
  console.log(data.data)
 
  return (
    <>
      <div
        className={`${show} flex-col gap-10 p-6 w-full max-w-xl text-black dark:text-white rounded-t-md border-2 border-b-4  rounded-lg pt-3 border-gray-500 hover:border-black dark:hover:border-white`}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-verctex text-2xl">You Send</h1>
          <IoMdClose className="w-7 h-7" />
        </div>
        <div className="flex gap-8 px-7 py-10 text-black dark:text-white rounded-t-md border-2 border-b-4  rounded-lg  border-gray-500 hover:border-black dark:hover:border-white">
          <GoSearch className="w-9 h-9" />
          <input
            placeholder="Search"
            className=" w-full bg-transparent font-GT_Pressura_Mono text-2xl focus:outline-none"
          />
        </div>
        <div>
          <h1 className="font-GT_Pressura_Mono text-sm">POPULAR</h1>
          {data.data.map((item: any, index: any)=> (<li className="list-none" key={index}>
            
          <div className="flex items-center justify-between dark:hover:bg-[#171D23] px-7 py-2 rounded-lg">
            <div className="flex gap-4 items-center ">
              <Image
                alt="img"
                src={`/coins/svg/${item.currency}.svg`}
                width={36}
                height={36}
              ></Image>
              <div>
                <h1 className="text-base font-bold">{item.name}</h1>
                <h1 className="text-base ">
                  {item.currency} <span className="text-blue-400">. ARBITRUM</span>
                </h1>
              </div>
            </div>
            <MdOutlineDone className="w-8 h-8 fill-blue-400" />
          </div>
            {/* {item.currency} */}
            </li>) )}
          {/* <ul> */}
      {/* {cryptocurrencies.map((currency) => ( */}
        {/* // <li key={currency.id}>{currency.name}</li> */}
      {/* ))} */}
    {/* </ul> */}
        </div>
      </div>
    </>
  );
}
