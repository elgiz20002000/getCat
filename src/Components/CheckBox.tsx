import { checkbox } from "../Interfaces/checkbox";
import { Label } from "../styles/checkbox";


const CheckBox = ({ auto, id, label, setAuto }: checkbox) => {
  return (
    <Label id={id} className="container">
      <input
        checked={auto}
        onChange={(e) =>
          id == "auto" ? setAuto(e.target.checked) : setAuto(!e.target.checked)
        }
        type="checkbox"
      />
      {label}
    </Label>
  );
};

export default CheckBox;
