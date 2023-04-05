import logo from "../assets/spotify-logo2.png";
import { Center, Square, Circle, InputRightElement } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box, Icon } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Input, InputGroup } from "@chakra-ui/react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";

// FaFacebook;
export default function LoginPage() {
	const nav = useNavigate();
	const dispatch = useDispatch();

	const [seeAccount, setSeeAccount] = useState({
		email: "",
		password: "",
	});

	function inputHandler(event) {
		const { value, id } = event.target;
		const tempAccount = { ...seeAccount };
		tempAccount[id] = value;
		setSeeAccount(tempAccount);
	}
	function login() {
		dispatch({
			type: auth_types.login,
			payload: seeAccount,
		});
		nav("/");
	}
	localStorage.setItem("user", JSON.stringify(seeAccount));
	const [seePassword, setSeepassword] = useState(false);
	return (
		<>
			<Box
				bg="vanila"
				w="100%"
				p="10px"
				borderBottom="2px"
				borderBottomColor="rgb(189, 191, 193)"
			>
				<Center>
					<Image src={logo} w="200px" h="60px"></Image>
				</Center>
			</Box>
			<Center>
				<Box maxW={"450px"} mt="30px">
					<Button
						colorScheme="facebook"
						borderRadius={"30px"}
						w={"450px"}
						h={"48px"}
						leftIcon={<BsFacebook />}
						letterSpacing="2px"
						fontSize="16px"
						fontWeight="700"
						mb={"10px"}
					>
						CONTINUE WITH FACEBOOK
					</Button>
					<Button
						colorScheme={"RGBA(0, 0, 0, 0.92)"}
						bg={"RGBA(0, 0, 0, 0.92)"}
						color={"#fff"}
						borderRadius={"30px"}
						w={"450px"}
						h={"48px"}
						leftIcon={<BsApple />}
						fontSize="16px"
						letterSpacing="2px"
						mb={"10px"}
					>
						CONTINUE WITH APPLE
					</Button>
					<Button
						color="gray.500"
						borderRadius={"30px"}
						bg="#fff"
						w={"450px"}
						h={"48px"}
						leftIcon={<FcGoogle />}
						fontSize="16px"
						letterSpacing="2px"
						border="2px"
						borderColor="gray.400"
						mb={"10px"}
						_hover={{ borderColor: "black" }}
					>
						CONTINUE WITH GOOGLE
					</Button>
					<Button
						color="gray.500"
						borderRadius={"30px"}
						bg="#fff"
						w={"450px"}
						h={"48px"}
						letterSpacing="2px"
						fontSize="16px"
						fontWeight="600"
						border="2px"
						borderColor="gray.400"
						mb={"10px"}
						_hover={{ borderColor: "black" }}
					>
						CONTINUE WITH NUMBER PHONE
					</Button>
					<Flex marginBottom={"20px"}>
						<hr
							style={{
								border: "1px solid rgb(203, 203, 203)",
								width: "200px",
								marginTop: "30px",
							}}
						/>
						<span
							style={{
								color: "black",
								fontWeight: "900",
								margin: "30px 10px 0 10px",
							}}
						>
							OR
						</span>
						<hr
							style={{
								border: "1px solid rgb(203, 203, 203)",
								width: "200px",
								marginTop: "30px",
							}}
						/>
					</Flex>
					<label
						for="email"
						style={{
							fontWeight: "700",
							paddingBottom: "10px",
							display: "inline-block",
						}}
					>
						Email address or username
					</label>
					<Input
						type="text"
						id="email"
						border="2px"
						borderColor="gray.400"
						placeholder="Email address or username"
						_hover={{ borderColor: "black" }}
						h={"48px"}
						mb={"15px"}
						onChange={inputHandler}
					/>

					<label
						for="password"
						style={{
							fontWeight: "700",
							paddingBottom: "10px",
							display: "inline-block",
						}}
					>
						Password
					</label>
					<InputGroup>
						<Input
							type={seePassword ? "text" : "password"}
							border="2px"
							borderColor="gray.400"
							placeholder="Password"
							id="password"
							_hover={{ borderColor: "black" }}
							h={"48px"}
						/>
						I
						<InputRightElement>
							<Icon
								as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
								w="24px"
								h="24px"
								color={"#A5A5A5"}
								marginTop="5px"
								cursor={"pointer"}
								onClick={() => setSeepassword(!seePassword)}
								onChange={inputHandler}
							></Icon>
						</InputRightElement>
					</InputGroup>
					<a
						href="#"
						style={{
							display: "inline-block",
							color: "black",
							textDecoration: "underline",
							margin: "20px 0",
							fontWeight: "500",
						}}
					>
						Forgot your password?
					</a>
					<Flex justifyContent={"space-between"} alignItems={"flex-start"}>
						<Checkbox>Remember me</Checkbox>
						<Button
							bg={"#1ed760"}
							p={"8px 32px"}
							borderRadius={"20px"}
							fontSize={"15px"}
							onClick={login}
						>
							LOG IN
						</Button>
					</Flex>
					<hr
						style={{
							border: "1px solid rgb(203, 203, 203)",
							width: "430px",
							marginTop: "30px",
							marginBottom: "30px",
						}}
					/>
					<center>
						<span
							style={{
								color: "black",
								display: "inline-block",
								fontWeight: "900",
								marginBottom: "20px",
							}}
						>
							Don't have an account?
						</span>
					</center>
					<Button
						color="gray.500"
						borderRadius={"30px"}
						bg="#fff"
						w={"450px"}
						h={"48px"}
						p={"10px 31px 10px 31px"}
						fontSize="16px"
						letterSpacing="2px"
						border="2px"
						borderColor="gray.400"
						mb={"10px"}
						_hover={{ borderColor: "black" }}
					>
						SIGN UP FOR SPOTIFY
					</Button>
				</Box>
			</Center>
		</>
	);
}
