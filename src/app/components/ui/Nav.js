"use client";

import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";
import styles from "./Cro.module.css";
import youtubeIcon from "@/app/components/assets/youtube.png";
import facebookIcon from "@/app/components/assets/facebook.png";
import linkedinIcon from "@/app/components/assets/linkedin.png";
import Image from "next/image";
import { FaYoutube } from 'react-icons/fa';

const Nav = () => {
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const shouldBeVisible = scrollTop === 0;
			setIsNavbarVisible(shouldBeVisible);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex flex-col z-50 mb-1">

			<div className="fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-10 h-28 top-0"></div>

			<nav className="px-4 pt-4 fixed w-full z-50 ">
				<div className="container mx-auto border-b  relative ">
					<div className="flex items-center justify-between">
						<div className="font-bold text-2xl text-white">CRO</div>

						<div className="flex flex-col">
							<div
								className={`${styles.toggleDiv} ${isNavbarVisible ? styles.visible : styles.hidden}`}>
								<div className="flex space-x-4 justify-end">
									<div className="text-white pr-2 cursor-pointer  transition duration-100 ease-in-out delay-0 hover:scale-110 flex justify-center items-center ">
										<Image className="inline-block mr-1" src={youtubeIcon} alt="" width={16} height={16} />Youtube
										{/* <FaYoutube className="inline-block mr-2" fontSize={20} /> */}
										{/* Youtube */}
									</div>

									<div className="text-white pr-2 cursor-pointer   transition duration-100 ease-in-out delay-0 hover:scale-110 flex justify-center items-center">
										<Image className="inline-block mr-2" src={facebookIcon} alt="" width={16} height={16} />Facebook
									</div>

									<div className="text-white pr-2 cursor-pointer   transition duration-100 ease-in-out delay-0 hover:scale-110 flex justify-center items-center">
										<Image className="inline-block mr-2" src={linkedinIcon} alt="" width={16} height={16} />Linkedin
									</div>

									<button className="flex text-gray-800 rounded-full bg-[#dee05d] hover:bg-[#E5E866] px-2 py-0.5 justify-center items-center">
										Contact us
									</button>
								</div>
							</div>

							<div className={`px-2 pt-2 ${styles.dropdownContainer} `}>
								<div className="flex justify-end text-xl font-semibold ">
									<div className="text-white px-3 cursor-pointer pb-2 ">Home</div>

									<div className="text-white px-3 cursor-pointer pb-2 ">About</div>

									<div className="text-white px-2 cursor-pointer pb-4 relative "
										onMouseEnter={() => setIsHovered(true)}
										onMouseLeave={() => setIsHovered(false)}
									>
										Department
										<MdArrowDropDown className="inline-block" fontSize={24} />

										{isHovered && (
											<div className="absolute inset-x-0 -bottom-[0.5] ">
												<div className=" flex items-center justify-center">
													<BiSolidUpArrow className="" fontSize={18} />
												</div>
											</div>
										)}
									</div>

									<div className="text-white px-3 cursor-pointer pb-2 ">Solutions</div>

									<div className="text-white px-3 cursor-pointer pb-2 ">Expertise</div>

									<div className="text-white px-3 cursor-pointer pb-2 ">
										News & Media
									</div>
									<div className=" text-white cursor-pointer pb-2 ">Career</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className={`${isNavbarVisible ? "top-20" : "top-12"} absolute ${isHovered ? ` bg-white rounded-2xl` : ``}`}>
						<div className={`${isHovered ? "block" : "hidden"} p-4`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							this is dropdown
						</div>
					</div> */}
					<div className={`${isNavbarVisible ? "top-20" : "top-12"} absolute container mx-auto  ${styles.toggleDiv1}  ${isHovered ? `${styles.visible1}  ` : `${styles.hidden1}`}`}>

						<div className={`${styles.visible1} bg-white rounded-2xl p-4 text-cyan-800 text-lg`} onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos voluptatum quasi id cum ipsam commodi iusto neque omnis, possimus enim facilis fugit sapiente asperiores hic reiciendis itaque modi natus.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos voluptatum quasi id cum ipsam commodi iusto neque omnis, possimus enim facilis fugit sapiente asperiores hic reiciendis itaque modi natus.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos voluptatum quasi id cum ipsam commodi iusto neque omnis, possimus enim facilis fugit sapiente asperiores hic reiciendis itaque modi natus.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos voluptatum quasi id cum ipsam commodi iusto neque omnis, possimus enim facilis fugit sapiente asperiores hic reiciendis itaque modi natus.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos voluptatum quasi id cum ipsam commodi iusto neque omnis, possimus enim facilis fugit sapiente asperiores hic reiciendis itaque modi natus.
						</div>
						{/* <div className="p-4 bg-red-900 flex space-x-4 justify-end"></div> */}
						{/* <div className={`${isHovered ? "block" : "hidden"} p-4 h-[80vh]`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							this is dropdown
						</div> */}
					</div>

					{/* <div className={` ${isHovered ? styles.visible1 : styles.hidden1} bg-white p-8 rounded-2xl`}>
						<div
							// className={`${isNavbarVisible ? "top-18" : "top-12"} absolute container mx-auto`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<div className="bg-white p-8 rounded-2xl ">
								<p>Ok 1 Hover me!</p>
							</div>
						</div>
					</div> */}

					{/* {isHovered === 1 && (
						<div className={`${styles.toggleDiv} ${isHovered === 1 ? styles.visible : styles.hidden}`}>
							<div
								className={`${isNavbarVisible ? "top-18" : "top-12"
									} absolute container mx-auto`}
								onMouseEnter={() => setIsHovered(1)}
								onMouseLeave={() => setIsHovered(0)}
							>
								<div className="bg-white p-8 rounded-2xl h-[70vh]">
									<p>Ok 1 Hover me!</p>
								</div>
							</div>
						</div>)} */}
				</div>
			</nav>
		</div>
	);
};

export default Nav;
