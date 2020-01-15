import React from "react";

import Aux from "../../hoc/Aux";
// import classes from './Layout.module.css';


const layout = props => {
  return (
    <Aux>
      <div>Toolbar, sideDrawer, Backdrop</div>
      <main >{props.children}</main>
    </Aux>
  );
};

export default layout;
