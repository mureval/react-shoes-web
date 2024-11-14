import Input from "../../components/Input";
import "./colors.css";

const Colors = () => {
  return (
    <div className="mr">
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <Input itemName={"All"} />
        <Input itemName={"Black"} />
        <Input itemName={"Blue"} />
        <Input itemName={"Red"} />
        <Input itemName={"Green"} />
        <Input itemName={"White"} />
      </div>
    </div>
  );
};

export default Colors;
