import React from "react";
import Aux from '../../hoc/Hoc';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
const Layout = props => {
  return (
    <Aux>
      <Toolbar />      
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
