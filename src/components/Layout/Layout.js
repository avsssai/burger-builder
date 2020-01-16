import React from "react";

import Aux from "../../hoc/Aux";
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = props => {
  return (
    <Aux className={classes.Content}>
      <Toolbar />
      <main className={classes.main}>{props.children}</main>
    </Aux>
  );
};

export default layout;
