import { useState } from "react";
import { useProductAction } from "../../components/Providers/ProductsProvider";
import styles from "./search.module.css";

const SearchBar = ({ filter }) => {
  const dispatch = useProductAction();
  const [value, setValue] = useState();

  const changeHandler = (e) => {
    // console.log(e.target.value);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };

  return (
    <div className={styles.formControl}>
      <div>search for :</div>
      <input
        type="text"
        placeholder="Search for ..."
        onChange={changeHandler}
        value={value}
      ></input>
    </div>
  );
};

export default SearchBar;
