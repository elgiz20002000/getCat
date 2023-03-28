import { useContext } from "react";
import { mainContext } from "../Contexts/mainContext";
import { Button, Form } from "../styles/formStyle";
import CheckBox from "./CheckBox";



const CatForm = () => {
  const { auto, setAuto, refetch, setStart } = useContext(mainContext);
  return (
    <Form>
      <CheckBox id="enable" label="Enabled" auto={!auto} setAuto={setAuto} />
      <CheckBox
        id="auto"
        label="Auto-refresh every 5 second"
        auto={auto}
        setAuto={setAuto}
      />
    <Button onClick={(e) => {
      e.preventDefault()
      refetch()
      setStart('fetch')
    }}>Get Cat</Button>
    </Form>
  );
};

export default CatForm;
