import Input from "../../components/Input";
import "./price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input
          itemName={"All"}
          value={""}
          name={"test2"}
          handleChange={handleChange}
        />
        <Input
          itemName={"$0 - $50"}
          value={"$50,00"}
          name={"test2"}
          handleChange={handleChange}
        />
        <Input
          itemName={"$50 - $100"}
          value={"$100,00"}
          name={"test2"}
          handleChange={handleChange}
        />
        <Input
          itemName={"$100 - $150"}
          value={"$150,00"}
          name={"test2"}
          handleChange={handleChange}
        />
        <Input
          itemName={"Over $150"}
          value={"$200,00"}
          name={"test2"}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Price;
