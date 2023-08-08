import React, { Fragment, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import classes from "./Contact.module.css";
import Button from "./UI/Button";
import MessageBox from "./UI/MessageBox";

const Contact = (props) => {
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");
	const form = useRef();

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const emailInputChangeHandler = (e) => {
		setEnteredEmail(e.target.value);
	};

	const messageInputChangeHandler = (e) => {
		setEnteredMessage(e.target.value);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (enteredName.trim() === "" || (!enteredEmail.includes("@") && enteredEmail.trim() === "") || enteredMessage.trim() === "") {
			console.log("validation failed");
			return;
		}

		emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`).then(
			(result) => {
				setMessage("Thank you for your message, I will get back to you soon!");
				setShowMessage(true);
				e.target.reset();
			},
			(error) => {
				setMessage("There was a problem sending your message, please try again");
				setShowMessage(true);
			}
		);
	};

	const hide = props.hide;

	useEffect(() => {
		if (showMessage) {
			const timer = setTimeout(() => {
				setShowMessage(false);
				setMessage("");
				hide();
			}, 4000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [showMessage, hide]);

	const isValid = enteredEmail && enteredEmail.includes("@") && enteredName && enteredMessage;

	return (
		<Fragment>
			{showMessage && <MessageBox onClick={props.hide} message={message} />}
			{!showMessage && (
				<form ref={form} onSubmit={sendEmail} className={classes.form}>
					<h3>Contact Me</h3>
					<label>Name</label>
					<input type="text" name="user_name" onChange={nameInputChangeHandler} />
					<label>Email</label>
					<input type="email" name="user_email" onChange={emailInputChangeHandler} />
					<label>Message</label>
					<textarea name="message" rows="5" onChange={messageInputChangeHandler} />
					<Button className={classes.submit} type="submit" value="Send" disabled={!isValid}>
						Send Email
					</Button>
				</form>
			)}
		</Fragment>
	);
};

export default Contact;
