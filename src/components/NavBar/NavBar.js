import style from "./navBar.module.css";

const NavBar = ({ totalItems }) => {
  console.log("NavBar.js render");
  return (
    <header className={style.navBar}>
      <h2>Shoping</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default NavBar;
