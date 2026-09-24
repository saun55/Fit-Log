"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { FitLogType } from "../FitLogType/FitLogType";

interface FitLogProviderType {
  addPlan: FitLogType[];
  setAddPlan: Dispatch<SetStateAction<FitLogType[]>>;
  saveLater: FitLogType[];
  setSaveLater: Dispatch<SetStateAction<FitLogType[]>>;
}

export const FitLogContext = createContext<FitLogProviderType>({
  addPlan: [],
  setAddPlan: () => {},
  saveLater: [],
  setSaveLater: () => {},
});

const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<FitLogType[]>([]);
  const [saveLater, setSaveLater] = useState<FitLogType[]>([]);


  const shearData = {
    addPlan,
    setAddPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <FitLogContext.Provider value={shearData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
