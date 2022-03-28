import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import classes from "./Card.module.css";
import CardWrapper from "./CardWrapper";
import FirstRowBtnGroup from "./FirstRowBtnGroup";
import LastRowBtnGroup from "./LastRowBtnGroup";
import Screen from "./Screen";
import SecondToFourthRowBtnGroup from "./SecondToFourthRowBtnGroup";
const Card = () => {
  const [calc, setCalc] = useState({
    operator: "",
    num: 0,
    res: 0,
  });
  const [error , setError] = useState('');
  const navigate = useNavigate();


  const numClickHandler = (e) => {
    const value = e.target.innerText;
    setCalc({
      ...calc,
      num: calc.num === 0 && value === "0" ? "0" : Number(calc.num + value),
      res: !calc.operator ? 0 : calc.res,
    });
  };

  const pointClickHandler = (e) => {
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  const operatorClickHandler = (e) => {
    setCalc({
      ...calc,
      operator: e.target.innerText,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };
  const operatorInvertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      operator: "",
    });
  };
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      operator: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      operator: "",
      num: 0,
      res: 0,
    });
  };
  const computeResult = (e) => {
    let calcValue;
    let num1 = Number(calc.res);
    let num2 = Number(calc.num);
    
    
    switch (calc.operator) {
      case "/":
          try {
            if(calc.operator === '/' && num2 === 0) {
               throw new Error("Arithmetic Exception error occurred !")
            }
            calcValue = num1 / num2;
          } catch (error) {
              // return toast.error(error.message);
              return navigate('/error');
          }
        
        break;

      case "+":
        calcValue = num1 + num2;
        break;
      case "*":
        calcValue = num1 * num2;
        break;
      case "-":
        calcValue = num1 - num2;
        break;
      default:
        return;
    }
    setCalc({
      ...calc,
      res: calcValue,
      operator: "",
      num: 0,
    });
  };

  return (
        <CardWrapper>
            <Screen value={calc.num ? calc.num : calc.res} />
            <div className={classes["grid-container"]}>
                <FirstRowBtnGroup 
                  onResetClickHandler = {resetClickHandler}
                  onPercentClickHandler = {percentClickHandler}
                  onOperatorInvertClickHandler = {operatorInvertClickHandler}
                  onOperatorClickHandler = {operatorClickHandler}
                />
                <SecondToFourthRowBtnGroup
                  onNumClickHandler = {numClickHandler}
                  onOperatorClickHandler = {operatorClickHandler}
                />
                <LastRowBtnGroup 
                  onNumClickHandler = {numClickHandler}
                  onPointClickHandler = {pointClickHandler}
                  onComputeResult = {computeResult}
                />
            </div>
        </CardWrapper>
  );
};

export default Card;
