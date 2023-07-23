import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
	const content = (
		<motion.div className={`${classes.modal} ${props.className}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
			<header className={`${classes.header} ${props.headerClass}`}>
				<h2>{props.header}</h2>
				<button onClick={props.onCancel}>X</button>
			</header>
			<div className={classes.content}>{props.children}</div>
			<footer className={classes.footer}>{props.footer}</footer>
		</motion.div>
	);

	return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{props.show && <Backdrop onClick={props.onCancel} />}
			{props.show && <ModalOverlay {...props} />}
		</React.Fragment>
	);
};

export default Modal;
