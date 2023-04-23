import {useContext} from 'react'
import { AppContext } from '../contexts/AppContext';

export default function ReceiveInput() {
  const { recive,reciveAmount,setReciveAmount } = useContext(AppContext);

    return (
      <>
     <div className="relative flex items-center w-[187px] border-2 border-neutral-200 dark:border-neutral-500  rounded-lg">
            <input
              className="c-input"
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
  