import React from "react";

import Tag from "./UI/Tag";
import Button from "./UI/Button";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
	const tags = props.tags.map((tag, index) => <Tag key={index} tag={tag} />);

	return (
		<div className={classes.card}>
			<div className={classes.cardImg}>
				<img src={props.img} alt={props.imgAlt} />
			</div>
			<div className={classes.cardDescription}>
				<p>{props.description}</p>
				<div className={classes.tags}>{tags}</div>
			</div>
			<div className={classes.buttonContainer}>
				<Button>
					<a href={props.github} target="_blank" rel="noreferrer">
						GitHub Code
					</a>
				</Button>
				<Button>
					<a href={props.link} target="_blank" rel="noreferrer">
						Live Preview
					</a>
				</Button>
			</div>
		</div>
	);
};

export default ProjectCard;
