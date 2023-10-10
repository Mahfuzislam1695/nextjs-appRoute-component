import Footer from "./components/ui/Footer";
import Nav from "./components/ui/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Nav />
				<div>{children}</div>

				{/* <Footer /> */}
				{/* <header>
					<div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ipsa eum, dolor, voluptas nostrum velit officia molestias animi ea obcaecati ullam quia repellendus non natus distinctio, rerum cupiditate impedit ducimus.</div>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam illum facere dolore sint placeat. Fuga molestias, adipisci, eveniet sequi id illum laboriosam in debitis, nobis ullam vero exercitationem explicabo similique!
				</header> */}
			</body>
		</html>
	);
}
