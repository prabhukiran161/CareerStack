import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type GlobalContextType = {
  showDeveloperName: boolean;
  setShowDeveloperName: (value: boolean) => void;
  hasHeroAnimationPlayed: boolean;
  setHasHeroAnimationPlayed: (value: boolean) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [showDeveloperName, setShowDeveloperName] = useState(false);
  const [hasHeroAnimationPlayed, setHasHeroAnimationPlayed] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        showDeveloperName,
        setShowDeveloperName,
        hasHeroAnimationPlayed,
        setHasHeroAnimationPlayed,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
