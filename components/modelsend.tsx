import { IoMdClose } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";
import Image from "next/image";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useEffect, useState } from "react";
import { useCurrencies } from "@/lib/hooks";
// import { getAllCryptocurrencies } from "./apicall";
export default function ModelSend() {
  // const data = useCurrencies()
  
  
  // console.log("from model send");
  const { isSendOpen, setIsSendOpen, setSend, send, sendNetwork, setSendNetwork } = useContext(AppContext);
  const handleClick = () => {
    setIsSendOpen(!isSendOpen);
  };
  const handleCurrenciesClick = (currency: string, network: string) => {
    // console.log(currency);
    setSend(currency);
    setSendNetwork(network);
    setIsSendOpen(!isSendOpen);

  };
  // console.log(isSendOpen, "from model");
  const show: string = isSendOpen ? "flex" : "hidden";
  // console.log(data.data)
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // console.log(searchResults);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/currencies');
      const response = await res.json();
      if(response.data.success === 1){
        setData(response.data.data);
        console.log(response.data.data);
        setSearchResults(response.data.data);
        
      }else{
        alert("Error fetching currencies");
      }
      // console.log("From hook")
    }
    fetchData()
  }, [])
  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const term = event.target.value;
    setSearchTerm(term);

    // Call your search function here and set the search results
    const results: any = data.filter(
      (result: any) =>
        result.name.toLowerCase().includes(term.toLowerCase()) ||
        result.currency.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  }

  return (
    <>
      <div className={`${show} model-div`}>
        <div className="flex items-center justify-between">
          <h1 className="font-verctex text-2xl">You Send</h1>
          <button onClick={handleClick}>
            <IoMdClose className="w-7 h-7" />
          </button>
        </div>
        <div className="flex gap-8 px-7 py-10 text-black dark:text-white rounded-t-md border-2 border-b-4  rounded-lg  border-gray-500 hover:border-black dark:hover:border-white">
          <GoSearch className="w-9 h-9" />
          <input
            placeholder="Search"
            className=" w-full bg-transparent font-GT_Pressura_Mono text-2xl focus:outline-none"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="overflow-y-auto max-h-[400px]">
          <h1 className="font-GT_Pressura_Mono text-sm">POPULAR</h1>
          {searchResults.map((item: any, index: any) => (
            <li className="list-none" key={index}>
              <div className="flex flex-col gap-4 items-center justify-between ">
                {/* {item.networkList.map((network: any, networkIndex: any) => ( */}
                
                <button
                  className="w-full flex justify-between dark:hover:bg-[#171D23] px-7 py-2 rounded-lg"
                  // key={networkIndex}
                  onClick={() => {
                    handleCurrenciesClick(item.currency, item.networkList[0].name);
                  }}
                >
              
                      <div className="flex flex-row gap-4 ">
                        <Image
                          alt="img"
                          src={`/coins/svg/${item.currency}.svg`}
                          width={36}
                          height={36}
                        ></Image>
                        <div>
                          <h1 className="text-base font-bold text-left">
                            {item.name}
                          </h1>
                          <h1 className="text-base ">
                            {item.currency}
                            <span className="text-blue-400">
                              . {item.networkList[0].name}
                            </span>
                          </h1>
                        </div>
                      </div>
                        {send === item.currency &&  (
                          <MdOutlineDone className="w-8 h-8 fill-blue-400" />
                        )}
                
                </button>
                  {/* // ))} */}
              </div>
            </li>
          ))}
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
