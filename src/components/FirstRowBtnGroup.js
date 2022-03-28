import React from 'react';
import classes from "./Card.module.css";

const FirstRowBtnGroup = (props) => {
    const {onResetClickHandler , onPercentClickHandler , onOperatorInvertClickHandler , onOperatorClickHandler} = props;
  return (
    <>
        <button onClick={onResetClickHandler} className={classes["btn-AC"]}>AC</button>
        <button onClick={onPercentClickHandler} className={classes["btn-operator"]} >%</button>
        <button onClick={onOperatorInvertClickHandler} className={classes["btn-operator"]}> +/-</button>
        <button onClick={onOperatorClickHandler} className={classes["btn-operator"]}>/</button>
    </>
  )
}

export default FirstRowBtnGroup
