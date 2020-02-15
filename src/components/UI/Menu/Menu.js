import React from "react";
import classes from "./Menu.module.css";

const Menu = props => {
  return (
    <div>
      <div className={classes.Menu}>Burger builder</div>
      <div className={classes.HamburgerMenu} onClick={props.menuClick}>
        &#9776;
      </div>
    </div>
  );
};
export default Menu;
