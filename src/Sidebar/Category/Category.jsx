import Input from "../../components/Input";
import "./category.css";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input
          itemName={"All"}
          value={""}
          name={"test"}
          handleChange={handleChange}
        />
        <Input
          itemName={"Sneakers"}
          value={"sneakers"}
          name={"test"}
          handleChange={handleChange}
        />
        <Input
          itemName={"Flats"}
          value={"flats"}
          name={"test"}
          handleChange={handleChange}
        />
        <Input
          itemName={"Sandals"}
          value={"sandals"}
          name={"test"}
          handleChange={handleChange}
        />
        <Input
          itemName={"Heels"}
          value={"heels"}
          name={"test"}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Category;
