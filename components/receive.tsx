import Image from "next/image";
import {useContext} from 'react'
import { AppContext } from '../contexts/AppContext';
export default function Receive() {
  const { isReciveOpen,setIsReciveOpen,recive } = useContext(AppContext);
  const handleClick = () => {
    setIsReciveOpen(!isReciveOpen);
  };
    return (
      <>
        <button className="img-btn" onClick={handleClick}>
            <div className="flex flex-col items-center p-5 w-[180px]">
              <Image
                src={`/coins/svg/${recive}.svg`}
                // src="https://sideshift.ai/assets/btc-5a8131ec.svg"
                alt="Picture of the author"
                className="w-[74px] h-[76px]"
                width={74}
                height={76}
              />
              <h5 className="text-neutral-400 font-verctex mt-5">You Receive</h5>
              <h1 className="font-GT_Pressura_Mono_Bold">{recive}</h1>
            </div>
          </button>
      </>
    );
  }
  