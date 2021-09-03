import { useProductAction } from "../Providers/ProductsProvider";
import { useState } from "react";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";

const options = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");

  const [sort, setSort] = useState("");

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <div className={styles.filter}>
      <p>filter products based on:</p>

      <SelectComponent
        title={"order by size"}
        value={value}
        onChange={changeHandler}
        options={options}
      />
      <SelectComponent
        title={"sort by price"}
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
      />
    </div>
  );
};

export default Filter;
