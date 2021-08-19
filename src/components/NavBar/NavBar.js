import style from "./navBar.module.css";

const NavBar = (props) => {
  return (
    <header className={style.navBar}>
      <h2>Shoping</h2>
      <span>{props.totalItems}</span>
    </header>
  );
};

export default NavBar;
