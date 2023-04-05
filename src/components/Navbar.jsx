// import { FaBeer } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FaFacebook, FaUserAlt } from "react-icons/fa";
import "../CSS/Navbar.css";

export default function Navbar() {
	const userSelector = useSelector((state) => state.auth);
	return (
		<>
			<div className="mainNavbar">
				<div className="navbar">
					<div className="doubleArrow">
						<div className="Arrow">
							<div colorScheme={"black"} size={"20px"} borderRadius={"20px"}>
								<AiOutlineLeft id="" size={"20px"} color={"grey"} />
							</div>
						</div>

						<div className="Arrow">
							<Box colorScheme={"black"} size={"20px"} borderRadius={"20px"}>
								<AiOutlineRight id="" size={"20px"} color={"grey"} />
							</Box>
						</div>
					</div>

					<div className="registlog">
						<button id="registration">Upgrade</button>
						{/* <button id="login">userName</button> */}
						<Button
							colorScheme="grey.800"
							bg={"black"}
							borderRadius={"30px"}
							fontSize={"16px"}
							w={"120px"}
							height={"30px"}
							marginEnd={"20px"}
							leftIcon={<FaUserAlt />}
						>
							{userSelector?.email}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
