import Buttons from "../components/Buttons";
import "./recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons
            handleClick={handleClick}
            value={""}
            itemName={"All Products"}
          />
          <Buttons handleClick={handleClick} value={"Nike"} itemName={"Nike"} />
          <Buttons
            handleClick={handleClick}
            value={"Adidas"}
            itemName={"Adidas"}
          />
          <Buttons handleClick={handleClick} value={"Puma"} itemName={"Puma"} />
          <Buttons handleClick={handleClick} value={"Vans"} itemName={"Vans"} />
        </div>
      </div>
    </>
  );
};

export default Recommended;
