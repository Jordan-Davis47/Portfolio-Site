import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
	return (
		<button onClick={props.onClick} className={`${classes.animatedBtn} ${props.className}`} type={props.type ? props.type : "button"} value={props.value} disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
