import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const styleClass = [classes.Button,classes[props.btnType]].join(' ');
  return(
        <button className={styleClass} onClick={props.clicked}>{props.children}</button>
  )
}
export default Button;