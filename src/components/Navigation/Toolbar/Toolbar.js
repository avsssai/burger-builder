import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../../UI/Menu/Menu";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div className="Menu" onClick={props.toggleSideDrawer}>
        <Menu />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};
export default Toolbar;
