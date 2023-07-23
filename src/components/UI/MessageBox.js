import React from "react";
import { motion } from "framer-motion";

import classes from "./MessageBox.module.css";

const MessageBox = (props) => {
	return (
		<motion.div onClick={props.onClick} className={classes.container} initial={{ opacity: 0, scale: 0.9, translateY: 200 }} animate={{ opacity: 1, scale: 1, translateY: 0 }} transition={{ duration: 0.5 }}>
			<p>{props.message}</p>
		</motion.div>
	);
};

export default MessageBox;
