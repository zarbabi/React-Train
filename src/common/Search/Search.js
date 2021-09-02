import { useState } from "react";
import styles from "./search.module.css";

const SearchBar = () => {
  const [value, setValue] = useState();

  const changeHandler = (e) => {
    console.log(e.target.value);
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
