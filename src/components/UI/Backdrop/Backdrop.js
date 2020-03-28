import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.Backdrop} style={
      {
        visibility: props.showBackdrop ? 'visible' : 'hidden'
      }
    } onClick={props.closeModal}>
        {props.children}
    </div>
  )  
}
export default Backdrop;