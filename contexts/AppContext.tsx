import { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
  };
type AppContextType = {
  send: string;
  setSend: (send: string) => void;
  recive: string;
  setRecive: (send: string) => void;
  sendAmount: string;
  setSendAmount: (send: string) => void;
  reciveAmount: string;
  setReciveAmount: (send: string) => void;
//   isLoggedIn: boolean;
//   setIsLoggedIn: (isLoggedIn: boolean) => void;
  isSendOpen: boolean;
  setIsSendOpen: (isSendOpen: boolean) => void;
  isReciveOpen: boolean;
  setIsReciveOpen: (isSendOpen: boolean) => void;
  sendNetwork: string;
  setSendNetwork: (send: string) => void;
  reciveNetwork: string;
  setReciveNetwork: (send: string) => void;
  minimumAmount: string;
  setMinimumAmount: (send: string) => void;
  maximumAmount: string;
  setMaximumAmount: (send: string) => void;
};

export const AppContext = createContext<AppContextType>({
  send: 'ETH',
  setSend: () => {},
  recive: 'BTC',
  setRecive: () => {},
  sendAmount: '',
  setSendAmount: () => {},
  reciveAmount: '',
  setReciveAmount: () => {},
  sendNetwork: 'ETH',
  setSendNetwork: () => {},
  reciveNetwork: 'BTC',
  setReciveNetwork: () => {},
  isSendOpen: false,
  setIsSendOpen: () => {},
  isReciveOpen: false,
  setIsReciveOpen: () => {},
  minimumAmount: '',
  setMinimumAmount: () => {},
  maximumAmount: '',
  setMaximumAmount: () => {},
});

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [reciveNetwork, setReciveNetwork] = useState('BTC');
  const [sendNetwork, setSendNetwork] = useState('ETH');
  const [recive, setRecive] = useState('BTC');
  const [send, setSend] = useState('ETH');
  const [reciveAmount, setReciveAmount] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [minimumAmount, setMinimumAmount] = useState('');
  const [maximumAmount, setMaximumAmount] = useState('');
  const [isSendOpen, setIsSendOpen] = useState(false);
  const [isReciveOpen, setIsReciveOpen] = useState(false);

  const contextValue: AppContextType = {
    send,
    isSendOpen,
    setSend,
    setIsSendOpen,
    recive,
    setRecive,
    isReciveOpen,
    setIsReciveOpen,
    reciveNetwork,
    setReciveNetwork,
    sendNetwork,
    setSendNetwork,
    sendAmount,
    setSendAmount,
    reciveAmount,
    setReciveAmount,
    minimumAmount,
    setMinimumAmount,
    maximumAmount,
    setMaximumAmount
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};