import { createContext, Dispatch, SetStateAction } from "react";

export interface checkbox {
  auto: boolean;
  setAuto: Dispatch<SetStateAction<boolean>>;
  label:string;
  id:'enable' | 'auto'
}
