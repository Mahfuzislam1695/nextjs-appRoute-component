"use client";

import React, { useEffect, useState } from "react";
import Section from "../components/home/Section";
import Head from "next/head";

function ImageContainer() {
	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		function changeImage() {
			const scroll = (window.scrollY + window.innerHeight / 8);
			const sections = document.getElementsByClassName("section");

			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				section.classList.remove("active");

				if (
					section.offsetTop <= scroll &&
					section.offsetTop + section.offsetHeight > scroll
				) {
					setActiveSection(i);
					section.classList.add("active");
				}
			}
		}

		window.addEventListener("scroll", changeImage);
		changeImage();

		return () => {
			window.removeEventListener("scroll", changeImage);
		};
	}, []);

	const scrollToNextSection = () => {
		const sections = document.getElementsByClassName("section");
		if (activeSection < sections.length - 1) {
			const nextSection = sections[activeSection + 1];
			const scrollOptions = {
				top: nextSection.offsetTop,
				behavior: "smooth",
				easing: "ease-in-out",
			};
			window.scrollTo(scrollOptions);
			setActiveSection(activeSection + 1);
		}
	};

	return (
		<div >

			<div >
				<div className="scroll-smooth text-center">
					<Section
						activeSection={activeSection}
						img="url(image1.jpg)"
						direction="justify-start"
						text="1st Tina had lost her father to Crohn's disease. "
					/>

					<Section
						activeSection={activeSection}
						img="url(image2.jpg)"
						direction="justify-end"
						text="2nd Tina was in her early 20s."
					/>

					<Section
						activeSection={activeSection}
						img="url(image1.jpg)"
						direction="justify-start"
						text="3rd But it derailed her life. Tina was in her
					early 20s. "
					/>


					<Section
						activeSection={activeSection}
						img="url(image2.jpg)"
						direction="justify-end"
						text="4th building a promising future for herself in finance."
					/>

					<Section
						activeSection={activeSection}
						img="url(image1.jpg)"
						direction="justify-center"
						text="5th Then came the diagnosis. Finding out she had Crohn’s disease,"
					/>

					<Section
						activeSection={activeSection}
						img="url(image3.jpg)"
						direction="justify-center"
						text="6th She lived in New York City and was building a"
					/>

					<Section
						activeSection={activeSection}
						img="url(image1.jpg)"
						direction="justify-start"
						text="7th. She lived in New York City and was building "
					/>

					<Section
						activeSection={activeSection}
						img="url(image3.jpg)"
						direction="justify-center"
						text="8th Then came the diagnosis. Finding out she had"
					/>
				</div>

				<button
					className="next-section-button bg-blue-500 p-2 rounded-md text-white"
					onClick={scrollToNextSection}
				>
					Next Section
				</button>
			</div>

			<header className="h-screen bottom-0 border-4">
				<div className="mt-96">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi ipsum, at sint asperiores, necessitatibus voluptate obcaecati, illum suscipit officiis non eius voluptas. Nemo, omnis? Consequuntur inventore iste nisi repudiandae.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi ipsum, at sint asperiores, necessitatibus voluptate obcaecati, illum suscipit officiis non eius voluptas. Nemo, omnis? Consequuntur inventore iste nisi repudiandae.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi ipsum, at sint asperiores, necessitatibus voluptate obcaecati, illum suscipit officiis non eius voluptas. Nemo, omnis? Consequuntur inventore iste nisi repudiandae.
				</div>

			</header>
		</div>
	);
}

export default ImageContainer;
// "use client";

// import React, { useEffect, useState } from "react";
// import Section from "../components/home/Section";

// function ImageContainer() {
// 	const [activeSection, setActiveSection] = useState(0);

// 	useEffect(() => {
// 		function changeImage() {
// 			const scroll1 = window.scrollY + window.innerHeight / 8;
// 			const scroll = scroll1 + 500;
// 			const sections = document.getElementsByClassName("section");

// 			console.log("sections", sections);

// 			for (let i = 0; i < sections.length; i++) {
// 				const section = sections[i];
// 				section.classList.remove("active");

// 				if (
// 					section.offsetTop <= scroll &&
// 					section.offsetTop + section.offsetHeight > scroll
// 				) {
// 					setActiveSection(i);
// 					section.classList.add("active");
// 				}
// 			}
// 		}

// 		window.addEventListener("scroll", changeImage);
// 		changeImage();

// 		return () => {
// 			window.removeEventListener("scroll", changeImage);
// 		};
// 	}, []);

// 	const scrollToNextSection = () => {
// 		const sections = document.getElementsByClassName("section");
// 		if (activeSection < sections.length - 1) {
// 			const nextSection = sections[activeSection + 1];
// 			const scrollOptions = {
// 				top: nextSection.offsetTop,
// 				behavior: "smooth",
// 				easing: "ease-in-out",
// 			};
// 			window.scrollTo(scrollOptions);
// 			setActiveSection(activeSection + 1);
// 		}
// 	};

// 	return (
// 		<div>
// 			<div>
// 				<div>
// 					<Section
// 						activeSection={activeSection}
// 						img="url(image1.jpg)"
// 						direction="justify-start"
// 						text="Tina had lost her father to Crohn's disease. Now she faced her own
// 					diagnosis."
// 					/>
// 					<Section
// 						activeSection={activeSection}
// 						img="url(image1.jpg)"
// 						direction="justify-start"
// 						text="But it derailed her life. Tina was in her
// 					early 20s. She lived in New York City and was building a
// 					promising future for herself in finance"
// 					/>
// 					<Section
// 						activeSection={activeSection}
// 						img="url(image1.jpg)"
// 						direction="justify-start"
// 						text="But it derailed her life. Tina was in her
// 					early 20s. She lived in New York City and was building a
// 					promising future for herself in finance"
// 					/>

// 					<Section
// 						activeSection={activeSection}
// 						img="url(image2.jpg)"
// 						direction="justify-end"
// 						text="Tina was in her early 20s. She lived in New York City and was
// 					building a promising future for herself in finance."
// 					/>

// 					<Section
// 						activeSection={activeSection}
// 						img="url(image3.jpg)"
// 						direction="justify-center"
// 						text="Then came the diagnosis. Finding out she had Crohn’s disease,
// 					one of two IBD syndromes that affect 10 million people"
// 					/>
// 					<Section
// 						activeSection={activeSection}
// 						img="url(image3.jpg)"
// 						direction="justify-center"
// 						text=" She lived in New York City and was building a
// 					promising future for herself in finance"
// 					/>
// 					<Section
// 						activeSection={activeSection}
// 						img="url(image1.jpg)"
// 						direction="justify-start"
// 						text="But it derailed her life. Tina was in her
// 					early 20s. She lived in New York City and was building a
// 					promising future for herself in finance"
// 					/>
// 					<Section
// 						activeSection={activeSection}
// 						img="url(image3.jpg)"
// 						direction="justify-center"
// 						text="Then came the diagnosis. Finding out she had Crohn’s disease,
// 					one of two IBD syndromes that affect 10 million people"
// 					/>
// 				</div>

// 				<button
// 					className="next-section-button bg-blue-500 p-2 rounded-md text-white"
// 					onClick={scrollToNextSection}
// 				>
// 					Next Section
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default ImageContainer;

// "use client";

// import React, { useEffect, useState } from "react";
// import Section from "../components/home/Section";

// function ImageContainer() {
// 	const [activeSection, setActiveSection] = useState(0);

// 	useEffect(() => {
// 		function changeImage() {
// 			const scroll1 = window.scrollY + window.innerHeight / 3;
// 			const scroll = scroll1 + 400;
// 			const sections = document.getElementsByClassName("section");

// 			for (let i = 0; i < sections.length; i++) {
// 				const section = sections[i];
// 				section.classList.remove("active");

// 				if (
// 					section.offsetTop <= scroll &&
// 					section.offsetTop + section.offsetHeight > scroll
// 				) {
// 					setActiveSection(i);
// 					section.classList.add("active");
// 				}
// 			}
// 		}

// 		window.addEventListener("scroll", changeImage);
// 		changeImage();

// 		return () => {
// 			window.removeEventListener("scroll", changeImage);
// 		};
// 	}, []);

// 	// Function to scroll to the next section

// 	const scrollToNextSection = () => {
// 		const sections = document.getElementsByClassName("section");
// 		if (activeSection < sections.length - 1) {
// 			const nextSection = sections[activeSection + 1];
// 			const scrollOptions = {
// 				top: nextSection.offsetTop,
// 				behavior: "smooth",
// 				// Add easing for smoother scrolling
// 				easing: "ease-in-out",
// 			};
// 			window.scrollTo(scrollOptions);
// 			setActiveSection(activeSection + 1);
// 		}
// 	};

// 	return (
// 		<div>
// 			<div>
// 				<Section
// 					activeSection={activeSection}
// 					img="url(image1.jpg)"
// 					direction="justify-start"
// 					text="Tina had lost her father to Crohn's disease. Now she faced her own
// 					diagnosis."
// 				/>

// 				<Section
// 					activeSection={activeSection}
// 					img="url(image2.jpg)"
// 					direction="justify-end"
// 					text="Tina was in her early 20s. She lived in New York City and was
// 					building a promising future for herself in finance."
// 				/>

// 				<Section
// 					activeSection={activeSection}
// 					img="url(image3.jpg)"
// 					direction="justify-center"
// 					text="Then came the diagnosis. Finding out she had Crohn’s disease,
// 					one of two IBD syndromes that affect 10 million people"
// 				/>
// 				<Section
// 					activeSection={activeSection}
// 					img="url(image3.jpg)"
// 					direction="justify-center"
// 					text="Then came the diagnosis. Finding out she had Crohn’s disease,
// 					one of two IBD syndromes that affect 10 million people
// 					worldwide, wasn’t a surprise considering her family’s history
// 					with the disease. But it derailed her life. Tina was in her
// 					early 20s. She lived in New York City and was building a
// 					promising future for herself in finance"
// 				/>
// 			</div>

// 			<button
// 				className="next-section-button bg-blue-500 p-2 rounded-md text-white"
// 				onClick={scrollToNextSection}
// 			>
// 				Next Section
// 			</button>
// 		</div>
// 	);
// }

// export default ImageContainer;
