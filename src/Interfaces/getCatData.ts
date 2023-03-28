import { dataType } from "./data";

export interface getCatDataReturn {
  data: dataType[];
  loading: boolean;
  error: boolean;
  refetch:() => void
}


