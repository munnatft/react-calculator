import classes from "./Card.module.css";
const CardWrapper = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes["card-body"]}>
                {props.children}
            </div>
        </div>
    );
}

export default CardWrapper;