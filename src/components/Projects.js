import React, { Fragment, forwardRef, useState } from "react";
import ProjectCard from "./ProjectCard";

import classes from "./Projects.module.css";

import portfolio from "../images/project-screenshots/portfolio-screenshot.Webp";
import travelpalsImg from "../images/project-screenshots/travelpals-screenshot.Webp";
import ccImg from "../images/project-screenshots/CC screenshot.Webp";

import blogImg from "../images/project-screenshots/blog-screenshot.Webp";
import ipTrackerImg from "../images/project-screenshots/ipTracker-screenshot.Webp";
import Button from "./UI/Button";

const projects = [
	{
		name: "Card Creatures",
		description: "A full stack tactical playing card game, with user accounts, authentication and database integration through a dedicated backend. This is a MERN stack app with Redux Toolkit",
		img: ccImg,
		github: "https://github.com/Jordan-Davis47/CardCreatures",
		link: "https://cardcreatures.vercel.app",
		tags: ["ReactJS", "MongoDB", "NodeJS", "ExpressJS", "Redux Toolkit", "CSS"],
	},
	{
		name: "TravelPals",
		description: "Full stack social media app where users can create accounts, share travel locations, like and comment on other users posts. full user CRUD system with user authentication and image upload",
		img: travelpalsImg,
		link: "https://travelpals.vercel.app/places",
		github: "https://github.com/Jordan-Davis47/Travelpals",
		tags: ["NextJS", "ReactJS", "MongoDB", "CSS"],
	},
	{
		name: "Personal Blog Site",
		description: "A personal blog site where I post about web development, tutorials and about different technologies and techniques",
		link: "https://jddevelopmentblog.vercel.app/",
		github: "https://github.com/Jordan-Davis47/My-Blog-Site",
		img: blogImg,
		tags: ["NextJS", "ReactJS", "CSS"],
	},
	{
		name: "Personal Portfolio Site",
		description: "My web development portfolio site that you are currently visiting",
		img: portfolio,
		link: "https://jd-developer.com/",
		github: "https://github.com/Jordan-Davis47/My-Portfolio",
		tags: ["ReactJS", "CSS"],
	},
];

const moreProjects = [
	{
		name: "IP-Address Tracker",
		description: "An IP address tracker that shows region of entered IP address using mapbox API & Ipify API",
		link: "https://jddevelopment-ip-adress-tracker.vercel.app/",
		github: "https://github.com/Jordan-Davis47/IP-Address-Tracker",
		img: ipTrackerImg,
		tags: ["HTML", "CSS", "JavaScript"],
	},
];

const Projects = forwardRef((props, ref) => {
	const [showMore, setShowMore] = useState(false);

	const showMoreHandler = () => {
		setShowMore((prevState) => !prevState);
	};
	return (
		<section className={classes.projectsSection} ref={ref}>
			<h2>Projects</h2>
			<div className={classes.cardsContainer}>
				{projects.map((project, index) => (
					<ProjectCard key={index} link={project.link} github={project.github} name={project.name} description={project.description} tags={project.tags} img={project.img} imgAlt={"screenshot of project"} />
				))}
				{showMore && (
					<Fragment>
						{moreProjects.map((project, index) => (
							<ProjectCard key={index} link={project.link} name={project.name} description={project.description} tags={project.tags} img={project.img} imgAlt={"screenshot of project"} />
						))}
					</Fragment>
				)}
			</div>
			<Button onClick={showMoreHandler} className={classes.moreProjectsBtn}>
				{showMore ? "Less Projects" : "More Projects"}
			</Button>
		</section>
	);
});

export default Projects;
