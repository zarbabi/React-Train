import { useProductAction } from "../Providers/ProductsProvider";
import { useState } from "react";

const Filter = () => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch({ type: "filter", event: e });
  };
  return (
    <div>
      <p>filter products based on:</p>
      <div>
        order by
        <select onChange={changeHandler} value={value}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XLL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
