import React from "react";

import GithubIcon from "./Icons/GithubIcon";
import LinkedinIcon from "./Icons/linkedIn";

import jdSvg from "../images/jdSvg.svg";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
	return (
		<div className={classes.sidebar}>
			<div className={classes.sidebarTop}>
				<img src={jdSvg} alt={"JD logo"} className={classes.jdLogo} />
				<p>Web Developer</p>
			</div>
			<div className={classes.buttonContainer}>
				<button onClick={props.scrollToAbout}>About</button>
				<button onClick={props.scrollToSkills}>My Skills</button>
				<button onClick={props.scrollToProjects}>Projects</button>
				<button onClick={props.showSlides}>Certificates</button>
				<button onClick={props.showContact}>Contact</button>
				<div className={classes.linksContainer}>
					<LinkedinIcon />
					<GithubIcon />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
