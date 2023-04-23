import {useContext, useEffect, useState} from 'react'
import { AppContext } from '../contexts/AppContext';

export default function SendInput() {
  const { sendAmount,setSendAmount } = useContext(AppContext);
  
    return (
      <>
     <div className="c-div">
            <input
              className="c-input"
              placeholder="You send"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
            />
            <div className="absolute right-2 ">
              <button className="text-sm font-GT_Pressura_Mono_Regular border-2 border-b-4 border-neutral-400 py-1 px-2 rounded-xl hover:border-black dark:hover:border-white">MAX</button>
            </div>
          </div>
      </>
    );
  }
  