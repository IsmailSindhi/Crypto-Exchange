import {useContext, useEffect, useState} from 'react'
import { AppContext } from '../contexts/AppContext';

export default function SendInput(props: any) {
  const { sendAmount,setSendAmount,maximumAmount } = useContext(AppContext);
  const { e } = props;
  const [divStyle, setDivStyle] = useState('c-div')
  const [iStyle, setIStyle] = useState('c-input')
  useEffect(() => {
    if(e){
      setDivStyle('e-div')
      setIStyle('e-input')
    }else{
      setDivStyle('c-div')
      setIStyle('c-input')
    }
  },[e])
    return (
      <>
     <div className={`${divStyle}`}>
            <input
              className={`${iStyle}`}
              placeholder="You send"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
            />
            <div className="absolute right-2 ">
              <button onClick={()=>{setSendAmount(maximumAmount)}} className="text-sm font-GT_Pressura_Mono_Regular border-2 border-b-4 border-neutral-400 py-1 px-2 rounded-xl hover:border-black dark:hover:border-white">MAX</button>
            </div>
          </div>
      </>
    );
  }
  