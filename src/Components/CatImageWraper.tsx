import { useContext } from "react";
import { mainContext } from "../Contexts/mainContext";
import { Img, ImgWraper } from "../styles/catImageWraper";
import Default from "./Default";
import Loading from "./Loading";

const CatImageWraper = () => {
  const { data, loading, start } = useContext(mainContext);

  return (
    <ImgWraper>
      {start == "default" ? (
        <Default />
      ) : loading ? (
        <Loading />
      ) : data.length ? (
        <Img src={data ? data[0]?.url : ""} alt="cat" />
      ) : (
        <Default />
      )}
    </ImgWraper>
  );
};

export default CatImageWraper;
