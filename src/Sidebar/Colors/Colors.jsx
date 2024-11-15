import Input from "../../components/Input";
import "./colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div className="mr">
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value={''}
            name={'test3'}
          />
          <span className="checkmark all"></span>All
        </label>
        <Input
          itemName={"Black"}
          value={"black"}
          name={"test3"}
          handleChange={handleChange}
          color={"black"}
        />
        <Input
          itemName={"Blue"}
          value={"blue"}
          name={"test3"}
          handleChange={handleChange}
          color={"blue"}
        />
        <Input
          itemName={"Red"}
          value={"red"}
          name={"test3"}
          handleChange={handleChange}
          color={"red"}
        />
        <Input
          itemName={"Green"}
          value={"green"}
          name={"test3"}
          handleChange={handleChange}
          color={"green"}
        />
        <Input
          itemName={"White"}
          value={"white"}
          name={"test3"}
          handleChange={handleChange}
          color={"white"}
        />
      </div>
    </div>
  );
};

export default Colors;
