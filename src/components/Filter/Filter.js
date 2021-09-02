import { useProductAction } from "../Providers/ProductsProvider";

const Filter = () => {
  const dispatch = useProductAction();
  return (
    <div>
      <p>filter products based on:</p>
      <div>
        order by
        <select onChange={(e) => dispatch({ type: "filter", event: e })}>
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
