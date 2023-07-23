import { useRef, useState } from "react";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Modal from "./components/UI/Modal";
import Carousel from "./components/UI/Carousel";

import WDBCCert from "./images/certificates/Web Developer Bootcamp Completion Certificate.jpg";
import MERNCert from "./images/certificates/MERN stack course certificate JPEG.jpg";
import ReactCert from "./images/certificates/React - The Complete Guide Completion Certificate JPEG.jpg";
import NextCert from "./images/certificates/NextJS & React - The Complete Guide Completion Certificate JPEG.jpg";

import classes from "./components/About.module.css";

const slides = [
	{
		src: WDBCCert,
		alt: "Web Development Bootcamp Certificate",
		skills: ["strings"],
	},
	{
		src: ReactCert,
		alt: "React - The Compelte Guide Certificate",
		skills: ["strings"],
	},
	{
		src: MERNCert,
		alt: "MERN Stack Course Certificate",
		skills: ["strings"],
	},
	{
		src: NextCert,
		alt: "NextJS Course Certificate",
		skills: ["strings"],
	},
];

const App = () => {
	const [showContact, setShowContact] = useState(false);
	const [showSlides, setShowSlides] = useState(false);
	const skillsRef = useRef();
	const projectsRef = useRef();
	const aboutRef = useRef();

	const scrollToSkills = () => {
		skillsRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToProjects = () => {
		projectsRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToAbout = () => {
		console.log("clicked");
		aboutRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const showSlidesHandler = () => {
		setShowSlides(true);
	};

	const hideSlidesHandler = () => {
		setShowSlides(false);
	};

	const showContactHandler = () => {
		setShowContact(true);
	};

	const hideContactHandler = () => {
		setShowContact(false);
	};

	return (
		<div className="App">
			<Sidebar showContact={showContactHandler} showSlides={showSlidesHandler} scrollToSkills={scrollToSkills} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} />
			<div className="content">
				<div>
					<About showContact={showContactHandler} ref={aboutRef} />
				</div>
				<div>
					<Skills ref={skillsRef} />
				</div>
				<div>
					<Projects ref={projectsRef} />
				</div>

				<Modal show={showContact} onCancel={hideContactHandler}>
					<Contact hide={hideContactHandler} />
				</Modal>
				<Modal className={classes.slide} show={showSlides} onCancel={hideSlidesHandler}>
					<Carousel data={slides} />
				</Modal>
				<footer className="footer">
					<p>&copy; Jordan Davis Copyright 2023</p>
				</footer>
			</div>
		</div>
	);
};

export default App;
