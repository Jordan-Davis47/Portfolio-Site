import React from "react";

import classes from "./Tag.module.css";

const Tag = (props) => {
	return <div className={classes.tag}>{props.tag}</div>;
};

export default Tag;
