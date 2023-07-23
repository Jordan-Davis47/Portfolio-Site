import React, { useState } from "react";

import LeftArrow from "../Icons/UI/LeftArrow";
import RightArrow from "../Icons/UI/RightArrow";
import classes from "./Carousel.module.css";

const Carousel = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(props.data.length - 1);
			return;
		}
		setCurrentSlide(currentSlide - 1);
	};

	const nextSlide = () => {
		if (currentSlide === props.data.length - 1) {
			setCurrentSlide(0);
			return;
		}
		setCurrentSlide(currentSlide + 1);
	};

	return (
		<div className={classes.carousel}>
			<div className={classes.image}>
				{props.data.map((slide, index) => (
					<img key={index} className={currentSlide === index ? classes.slide : classes.hideSlide} src={slide.src} alt={slide.alt} />
				))}
			</div>
			<div className={classes.arrowContainer}>
				<LeftArrow onClick={prevSlide} />
				<RightArrow onClick={nextSlide} />
			</div>
		</div>
	);
};

export default Carousel;
