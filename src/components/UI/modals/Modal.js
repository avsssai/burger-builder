import React from "react";
import classes from "./Modal.module.css";
import Backdrop from '../backdrop/Backdrop';
import Aux from "../../../hoc/Aux";


const Modal = props => {
  return (
    <Aux>
      <Backdrop showBackdrop={props.showModal} clicked={props.closeModal}/>
      <div className={classes.Modal} style={
    {
      transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.showModal ? 1 : 0
    }
  }>{props.children}</div>

    </Aux>
  );
};

export default Modal;
