import React, { forwardRef } from "react";

import JavascriptIcon from "./Icons/JavascriptIcon";
import CssIcon from "./Icons/CssIcon";
import ReactIcon from "./Icons/ReactIcon";
import NodejsIcon from "./Icons/NodeJsIcon";
import ExpressIcon from "./Icons/ExpressJsIcon";
import TypescriptIcon from "./Icons/TypescriptIcon";
import MongoDBIcon from "./Icons/MongodbIcon";
import NextJSIcon from "./Icons/NextJsIcon";
import BootstrapIcon from "./Icons/BootstrapIcon";
import HtmlIcon from "./Icons/HTMLIcon";

import { motion } from "framer-motion";

import classes from "./Skills.module.css";

const Skills = forwardRef((props, ref) => {
	return (
		<section className={classes.skillsSection} ref={ref}>
			<div>
				<h2 className={classes.h2}>Technologies</h2>
				<motion.div className={classes.skillsList} initial={{ rotate: 10, opacity: 0 }} animate={{ rotate: 10, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} transition={{ type: "ease", duration: 1.4 }}>
					<div>
						<HtmlIcon />
						<p>HTML</p>
					</div>
					<div>
						<CssIcon />
						<p>CSS</p>
					</div>
					<div>
						<JavascriptIcon />
						<p>Javascript</p>
					</div>
					<div>
						<ReactIcon />
						<p>React</p>
					</div>
					<div>
						<NodejsIcon />
						<p>NodeJs</p>
					</div>
					<div>
						<ExpressIcon />
						<p>ExpressJs</p>
					</div>
					<div>
						<TypescriptIcon />
						<p>TypeScript</p>
					</div>
					<div>
						<MongoDBIcon />
						<p>MongoDB</p>
					</div>
					<div>
						<NextJSIcon />
						<p>NextJs</p>
					</div>
					<div>
						<BootstrapIcon />
						<p>Bootstrap</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
});

export default Skills;
