import Image from "next/image";
import Send from './send'
import SendInput from './sendinput'
import Receive from './receive'
import ReceiveInput from './recieveinput'
import AddressInput from "./addressinput";
import ShiftButton from "./shiftbutton";
import {useContext} from 'react'
import { AppContext } from '../contexts/AppContext';

export default function Exchange() { 
  const { send,setSend,recive,setRecive,reciveNetwork,setReciveNetwork,sendNetwork,setSendNetwork } = useContext(AppContext);

  const swap = () =>{
    setRecive(send);
    setSend(recive);
    setReciveNetwork(sendNetwork);
    setSendNetwork(reciveNetwork);
  
    console.log(recive,reciveNetwork,send,sendNetwork);}
  return (
    
    <>
      <div className="grid grid-cols-3 max-w-xl w-full text-black dark:text-white py-12 border-[3px] border-gray-200 dark:border-gray-600 rounded-lg px-3 lg:px-0">
        <h6 className="col-span-3 w-full flex justify-center items-center gap-2 text-black dark:text-neutral-300">
        1 BTC = 0.06558863 ETH 
        </h6>
        <div className="flex col-span-3 lg:px-12 px-1 mt-5 gap-3 items-center justify-center">
          <Send />
          <button onClick={swap}>

          <svg
            className=" w-7 img-sign"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            >
            <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
          </svg>
            </button>
          <Receive  />
          
        </div>
        <div className="flex items-center justify-center col-span-3 gap-4 lg:mx-10 mx-1 mt-3">
          <SendInput />
          <div className="text-2xl eq-sign cursor-default"><span>=</span></div>
          <ReceiveInput />
          
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-8 col-span-3 px-12 lg:px-1">
          <p className="mb-2 text-lg font-verctex">Receiving Address</p>
          <AddressInput />
          <ShiftButton />
        </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      </div>
    </>
  );
}
