import {useContext,useEffect, useState} from 'react'
import { AppContext } from '../contexts/AppContext';

export default function ReceiveInput(props: any) {
  const { recive,reciveAmount,setReciveAmount } = useContext(AppContext);
  const [divStyle, setDivStyle] = useState('c-div')
  const [iStyle, setIStyle] = useState('c-input')
  const { e } = props;
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
              placeholder="You recive"
              value={reciveAmount}
              onChange={(e) => setReciveAmount(reciveAmount)}
            />
            <div className="absolute right-2">
              <span className="text-sm font-GT_Pressura_Mono_Regular eq-sign cursor-default">{recive}</span>
            </div>
          </div>
      </>
    );
  }
  