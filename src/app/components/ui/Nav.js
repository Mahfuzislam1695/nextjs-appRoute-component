"use client";

import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";
import styles from "./Cro.module.css";
import youtubeIcon from "@/app/components/assets/youtube.png";
import facebookIcon from "@/app/components/assets/facebook.png";
import linkedinIcon from "@/app/components/assets/linkedin.png";
import Image from "next/image";

const Nav = () => {
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [isHovered, setIsHovered] = useState(0);

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
		<div className="flex flex-col z-50">

			<div className=" fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-10 h-28 top-0 "></div>

			<nav className=" p-4 fixed w-full z-50 ">
				<div className="container mx-auto border-b pb-1 relative">
					<div className="flex items-center justify-between">
						<div className=" font-bold text-2xl text-white">CRO</div>

						<div className="flex flex-col ">
							<div
								className={` ${styles.toggleDiv} ${isNavbarVisible ? styles.visible : styles.hidden
									}`}
							>
								<div className="flex space-x-4 justify-end">
									<div className="text-white pr-2 cursor-pointer  transition duration-300 ease-in-out delay-150 hover:scale-105">

										<Image className="inline-block mr-2" src={youtubeIcon} alt="" width={16} height={16} />Youtube
									</div>

									<div className="text-white pr-2 cursor-pointer  transition duration-300 ease-in-out delay-150 hover:scale-105">

										<Image className="inline-block mr-2" src={facebookIcon} alt="" width={16} height={16} />Facebook
									</div>

									<div className="text-white pr-2 cursor-pointer  transition duration-300 ease-in-out delay-150 hover:scale-105">

										<Image className="inline-block mr-2" src={linkedinIcon} alt="" width={16} height={16} />Linkedin
									</div>

									<button className="flex text-gray-800 rounded-full bg-[#dee05d] hover:bg-[#E5E866] px-2 py-0.5 justify-center items-center">
										Contact us
									</button>
								</div>
							</div>

							<div className={`px-2 pt-2 ${styles.dropdownContainer} `}>
								<div className="flex justify-end text-xl font-semibold ">
									<div className="text-white px-3 cursor-pointer">Home</div>

									<div className="text-white px-3 cursor-pointer">About</div>

									<div className="text-white px-2 cursor-pointer pb-3 relative"
										onMouseEnter={() => setIsHovered(1)}
										onMouseLeave={() => setIsHovered(0)}
									>
										Department
										<MdArrowDropDown className="inline-block" fontSize={24} />

										{isHovered === 1 && (
											<div className="absolute inset-x-0 -bottom-1 ">
												<div className=" flex items-center justify-center">
													<BiSolidUpArrow className="" fontSize={18} />
												</div>

											</div>
										)}
									</div>

									<div className="text-white px-3 cursor-pointer">Solutions</div>

									<div className="text-white px-3 cursor-pointer">Expertise</div>

									<div className="text-white px-3 cursor-pointer">
										News & Media
									</div>
									<div className=" text-white cursor-pointer">Career</div>

									{/* <div
										className="text-white pr-4 cursor-pointer"
									onMouseEnter={() => setIsHovered(2)}
									onMouseLeave={() => setIsHovered(0)}
									>
										Facilities
										<MdArrowDropDown className="inline-block" fontSize={24} />
									</div> */}
								</div>
							</div>
						</div>
					</div>
					{isHovered === 1 && (
						<div
							className={`${isNavbarVisible ? "top-18" : "top-12"
								} absolute container mx-auto`}
							onMouseEnter={() => setIsHovered(1)}
							onMouseLeave={() => setIsHovered(0)}
						>
							<div className="bg-white p-8 rounded-2xl">
								<p>Ok 1 Hover me!</p>
							</div>
						</div>
					)}
					{/* {isHovered === 2 && (
						<div
							className={`${isNavbarVisible ? "top-18" : "top-10"
								} absolute container mx-auto`}
							onMouseEnter={() => setIsHovered(2)}
							onMouseLeave={() => setIsHovered(0)}
						>
							<div className={`bg-white p-8 rounded-2xl`}>
								<p>Hover me! Ok 2</p>
							</div>
						</div>
					)} */}
				</div>
			</nav>
		</div>
	);
};

export default Nav;
