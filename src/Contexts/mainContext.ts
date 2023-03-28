import { createContext, Dispatch, SetStateAction } from "react";
import { getCatDataReturn } from "../Interfaces/getCatData";

interface main extends getCatDataReturn {
    auto:boolean
    setAuto: Dispatch<SetStateAction<boolean>>
    setStart:Dispatch<SetStateAction<'default' | 'pending' | 'fetch'>>
    start:'default' | 'pending' | 'fetch'

}
export const mainContext = createContext<main>({auto:false, setAuto:() => {}, start:"default", setStart:() => {}, data:[], error:false, loading:false, refetch:() => {}})