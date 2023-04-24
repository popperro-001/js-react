import classes from "./Header.module.css";
import Hero from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={Hero} alt="A table full of delicius food!" />
      </div>
    </>
  );
};

export default Header;
