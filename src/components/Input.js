import classes from './Input.module.css';

const Input = (props) => {
    let errorMessage;

    if (props.error) {
        errorMessage = <p className={classes.error}>{props.error}</p>;
    }

    return (
        <div className={classes.inputContainer}>
            <label className={classes.label} htmlFor={props.id}>
                {props.label}
            </label>
            <input
                className={classes.input}
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.changeHandler}
                onBlur={props.blurHandler}
            />
            {errorMessage}
        </div>
    );
};

export default Input;
