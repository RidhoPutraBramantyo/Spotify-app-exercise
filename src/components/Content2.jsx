// import "../CSS/Content2.css";
import { Box, Center } from "@chakra-ui/react";
import { Text, Flex, Image, Spinner } from "@chakra-ui/react";
import gambar2 from "../assets/img1.jpeg";
import gambar3 from "../assets/img2.jpeg";
import gambar4 from "../assets/img3.jpeg";
import { Wrap, WrapItem } from "@chakra-ui/react";
export default function Content2() {
	const arrContent = [
		{
			Image:
				"https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png",
			price: " is the third song included in LiSA's second single",
			tahun: 1999,
			nama: "song title",
		},
		{
			Image:
				"https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png",
			price: " is the third song included in LiSA's second single",
			tahun: 1999,
			nama: "song title",
		},
		{
			Image:
				"https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png",
			price: " is the third song included in LiSA's second single",
			tahun: 1999,
			nama: "song title",
		},
		{
			Image:
				"https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png",
			price: " is the third song included in LiSA's second single",
			tahun: 1999,
			nama: "song title",
		},
	];

	return (
		<>
			<Box
				w={"85vw"}
				bg={"brown"}
				h={"40vw"}
				ml={"15vw"}
				p={"20px"}
				position={"absolute"}
				mt={"7vh"}
			>
				<Box w={"100%"}>
					<Flex flexDirection={"column"}>
						<Text
							// bg={"black"}
							fontWeight={"600"}
							color={"white"}
							fontSize={"3xl"}
							w={"100%"}
							display={"block"}
						>
							Good Morning
						</Text>
						<Box>
							<Wrap>
								<WrapItem w={"32%"} bg={"rgb(45,32,30)"}>
									<Flex>
										<Image
											boxSize="80px"
											objectFit="cover"
											src={gambar2}
										></Image>
										<Box>
											<Text
												color={"#fff"}
												marginTop={"30px"}
												marginLeft={"5px"}
												fontSize={"16px"}
												fontWeight={"700"}
											>
												Mahalini
											</Text>
										</Box>
									</Flex>
								</WrapItem>
								<WrapItem w={"32%"} bg={"rgb(45,32,30)"}>
									<Flex>
										<Image
											boxSize="80px"
											objectFit="cover"
											src={gambar3}
										></Image>
										<Box>
											<Text
												color={"#fff"}
												marginTop={"30px"}
												marginLeft={"5px"}
												fontSize={"16px"}
												fontWeight={"700"}
											>
												Tulus
											</Text>
										</Box>
									</Flex>
								</WrapItem>
								<WrapItem w={"32%"} bg={"rgb(45,32,30)"}>
									<Flex>
										<Image
											boxSize="80px"
											objectFit="cover"
											src={gambar4}
										></Image>
										<Box>
											<Text
												color={"#fff"}
												marginTop={"30px"}
												marginLeft={"5px"}
												fontSize={"16px"}
												fontWeight={"700"}
											>
												Komang
											</Text>
										</Box>
									</Flex>
								</WrapItem>
								<WrapItem w={"32%"} bg={"rgb(45,32,30)"}>
									<Flex>
										<Image
											boxSize="80px"
											objectFit="cover"
											src={gambar2}
										></Image>
										<Box>
											<Text
												color={"#fff"}
												marginTop={"30px"}
												marginLeft={"5px"}
												fontSize={"16px"}
												fontWeight={"700"}
											>
												Mahalini
											</Text>
										</Box>
									</Flex>
								</WrapItem>
							</Wrap>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
}
//kurungan default function =====================

function Belanja(props) {
	return (
		<div className="content1">
			<div className="bungkus1">
				<div className="divImg">
					<img src={props.Image} alt="" />
				</div>

				<a className=" title">{props.nama}</a>
				<p className="">{props.price}</p>
			</div>
		</div>
	);
}
