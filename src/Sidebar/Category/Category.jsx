import Input from "../../components/Input";
import "./category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input itemName={"All"} />
        <Input itemName={"Sneakers"} />
        <Input itemName={"Flats"} />
        <Input itemName={"Sandals"} />
        <Input itemName={"Heels"} />
      </div>
    </div>
  );
};

export default Category;
