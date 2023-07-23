import React, { forwardRef } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import classes from "./About.module.css";
import "./typewriter.css";

const About = forwardRef((props, ref) => {
	return (
		<section className={classes.aboutSection} ref={ref}>
			<div className={classes.intro}>
				<h1>Hi,</h1>
				<h1>Im Jordan</h1>

				<Typewriter
					className={classes.typewriter}
					options={{
						strings: ["React Developer", "Full Stack Developer", "Web Developer"],
						loop: true,
						autoStart: true,
					}}
				/>
			</div>
			<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className={classes.aboutMeContainer}>
				<div className={classes.aboutSummaryContainer}>
					<p className={classes.aboutMe}>Over 3 years experience developing technical capabilities, specialising in React development.</p>
				</div>
				<motion.p className={classes.aboutMeSub} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.5 }}>
					Proficiency in HTML, CSS, Javascript & TypeScript
				</motion.p>
				<motion.p className={classes.aboutMeSub} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 1 }}>
					Use of React & NodeJS towards all stages of full stack application and website development
				</motion.p>
				<motion.p className={classes.aboutMeSub} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 1.5 }}>
					Use of various frameworks and libraries such as ExpressJS & NextJS
				</motion.p>
			</motion.div>
		</section>
	);
});

export default About;
