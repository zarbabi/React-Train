import { useState } from "react";
import { useProductAction } from "../../components/Providers/ProductsProvider";
import styles from "./search.module.css";

const SearchBar = () => {
  const dispatch = useProductAction();
  const [value, setValue] = useState();

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
    dispatch({ type: "search", event: e });
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
