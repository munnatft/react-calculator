import React from 'react';
import classes from "./Card.module.css";

const LastRowBtnGroup = (props) => {
    const {onNumClickHandler , onPointClickHandler , onComputeResult} = props;
  return (
    <>
        <button onClick={onNumClickHandler} className={classes["btn"]}>0</button>
        <button onClick={onPointClickHandler} className={classes["btn"]}>.</button>
        <button onClick={onComputeResult} className={classes["btn-equal"]}>=</button>
    </>
  )
}

export default LastRowBtnGroup
