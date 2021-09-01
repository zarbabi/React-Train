import style from "./navBar.module.css";
import { useProduct } from "../Providers/ProductsProvider";
const NavBar = () => {
  const products = useProduct();
  const totalItems = products.filter((p) => p.quantity > 0).length;
  console.log("NavBar.js render");
  return (
    <header className={style.navBar}>
      <h2>Shoping</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default NavBar;
