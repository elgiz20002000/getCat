import { useEffect, useState } from "react";
import CatForm from "./Components/CatForm";
import CatImageWraper from "./Components/CatImageWraper";
import useGetCatData from "./Components/customHooks/useGetCatData";
import { mainContext } from "./Contexts/mainContext";
import { start } from "./Interfaces/data";

function App() {
  const [auto, setAuto] = useState<boolean>(false);
  const { Provider } = mainContext;
  const [start, setStart] = useState<start>(
    "default"
  );

  const catData = useGetCatData(
    "https://api.thecatapi.com/v1/images/search",
    start,
    setStart
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (auto) {
        catData.refetch();
        setStart("fetch");
      }
    }, 5000);

    if (!auto) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [auto]);

  return (
    <div className="App">
      <Provider value={{ auto, setAuto, ...catData, setStart, start }}>
        <CatForm />
        <CatImageWraper />
      </Provider>
    </div>
  );
}

export default App;
