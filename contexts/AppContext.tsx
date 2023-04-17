import { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
  };
type AppContextType = {
//   name: string;
//   setName: (name: string) => void;
//   isLoggedIn: boolean;
//   setIsLoggedIn: (isLoggedIn: boolean) => void;
  isSendOpen: boolean;
  setIsSendOpen: (isSendOpen: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
//   name: '',
  isSendOpen: false,
//   setName: () => {},
  setIsSendOpen: () => {},
});

export const AppContextProvider: React.FC<Props> = ({ children }) => {
//   const [name, setName] = useState('');
  const [isSendOpen, setIsSendOpen] = useState(false);

  const contextValue: AppContextType = {
    // name,
    isSendOpen,
    // setName,
    setIsSendOpen,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};