import React from 'react';
import classes from "./Card.module.css";

const SecondToFourthRowBtnGroup = (props) => {
    const {onNumClickHandler , onOperatorClickHandler} = props
  return (
    <>
        <button onClick={onNumClickHandler} className={classes["btn"]}>7</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>8</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>9</button>
        <button onClick={onOperatorClickHandler} className={classes["btn-operator"]} >*</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>4</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>5</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>6</button>
        <button  onClick={onOperatorClickHandler} className={classes["btn-operator"]}>-</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>1</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>2</button>
        <button onClick={onNumClickHandler} className={classes["btn"]}>3</button>
        <button onClick={onOperatorClickHandler} className={classes["btn-operator"]}>+</button>
    </>
  )
}

export default SecondToFourthRowBtnGroup
