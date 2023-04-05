import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import Content2 from "../components/Content2";
import Footer from "../components/Footer";
import { Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";

export default function HomePage() {
	const [seeLoading, setSeeLoading] = useState(true);

	useState(() => {
		setTimeout(() => setSeeLoading(false), 1000);
	});
	return (
		<>
			{seeLoading ? (
				<Center h={"100vh"}>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Center>
			) : (
				<>
					<Navbar />
					<Sidebar />
					<Content2 />
					<Footer />
				</>
			)}
		</>
	);
}
