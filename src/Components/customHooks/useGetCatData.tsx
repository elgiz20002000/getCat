import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { dataType, start } from "../../Interfaces/data";
import { getCatDataReturn } from "../../Interfaces/getCatData";

const useGetCatData = (
  url: string,
  start: start,
  setStart: Dispatch<SetStateAction<start>>
): getCatDataReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(true);
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    if (refetch && start == "fetch") {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          setRefetch(false);
          setStart("pending");
        })
        .catch((err) => {
          setError(true);
          console.log(err);
          setRefetch(false);
          setStart("pending");
        });
    }
  }, [refetch, start]);


  return { data, loading, error, refetch: () => setRefetch(true) };
};

export default useGetCatData;
