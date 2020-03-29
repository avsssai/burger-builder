import React from "react";
import Aux from '../../hoc/Hoc';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Layout = props => {
  return (
    <Aux>
      <SideDrawer />
      <Toolbar />      
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
