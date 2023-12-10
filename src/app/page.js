"use client";

import React, { useEffect, useState } from "react";
import Section from "./components/home/Section";

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

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// export default function Home() {
// 	return (
// 		<div>
// 			<Parallax pages={2}>
// 				<ParallaxLayer
// 					offset={0}
// 					speed={0.5} // Adjust the speed as needed
// 					factor={2}
// 					sticky={{ start: 1, end: 3 }}
// 					style={{
// 						backgroundImage: `url(/img.jpg)`,
// 						backgroundSize: "cover",
// 						// backgroundPosition: "center",
// 					}}
// 				></ParallaxLayer>

// 				<ParallaxLayer offset={1.5}>
// 					<div className=" text-xl font-bold absolute right-10 top-[25%]">
// 						Hello World
// 					</div>
// 				</ParallaxLayer>

// 				<ParallaxLayer
// 					offset={1}
// 					speed={0.5} // Adjust the speed as needed
// 					factor={2}
// 					style={{
// 						backgroundImage: `url(/img2.jpg)`,
// 						backgroundSize: "cover",
// 						// backgroundPosition: "center",
// 						position: "relative",
// 					}}
// 				>
// 					<div className="text-white text-xl font-bold absolute">
// 						{" "}
// 						Hello from the other side{" "}
// 					</div>
// 				</ParallaxLayer>
// 			</Parallax>
// 		</div>
// 	);
// }
