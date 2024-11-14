import Input from "../../components/Input";
import "./price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input itemName={"All"} />
        <Input itemName={"$0 - $50"} />
        <Input itemName={"$50 - $100"} />
        <Input itemName={"$100 - $150"} />
        <Input itemName={"Over $150"} />
      </div>
    </div>
  );
};

export default Price;
