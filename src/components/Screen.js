
import classes from "./Card.module.css";

const Screen = (props) => {
    return (
        <div className={classes["result-box"]}>
          <div className={classes["result"]}>
              {props.value}
          </div>
        </div>
    );
}

export default Screen;