import "../App.css";
import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
// import login from "../assets/login_button1.png";
import logo from "../assets/spotify.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { TbAlertCircleFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth_types } from "../redux/types";

export default function LoginPage() {
  const nav = useNavigate;
  const dispatch = useDispatch;

  // function login() {
  //   dispatch({
  //     type: auth_types.login,
  //     payload: account,
  //   });

  //   localStorage.setItem("user", JSON.stringify(account));

  //   nav("/");
  // }

  return (
    <>
      <Center flexDir={"column"} w={"100vw"} gap={"10px"}>
        <Center
          w={"100%"}
          paddingTop={"25px"}
          paddingBottom={"22px"}
          borderBottom={"1px solid #d9dadc"}
        >
          <Image src={logo} w="143px" h={"44px"} />
        </Center>
        <Center fontWeight={"700"} pt={"25px"}>
          To continue, log in to Spotify
        </Center>
        <Center
          w={"100%"}
          maxW={"450px"}
          fontSize={"14px"}
          color={"white"}
          flexDir={"column"}
          gap={"10px"}
        >
          <Center
            w={"100%"}
            bgColor={"#1877F2"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"whiteAlpha.800"}
            letterSpacing={"1.5px"}
            border={"1px solid #1877f2"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon>
            CONTINUE WITH FACEBOOK
          </Center>
          <Center
            w={"100%"}
            bgColor={"#191919"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"whiteAlpha.800"}
            letterSpacing={"1.5px"}
            border={"1px solid #191919"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={BsApple}></Icon>
            CONTINUE WITH APPLE
          </Center>
          <Center
            w={"100%"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"#6a6a6a"}
            border={"1px solid #A5a5a5"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
            CONTINUE WITH GOOGLE
          </Center>
          <Center
            w={"100%"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"#6a6a6a"}
            border={"1px solid #A5a5a5"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black" }}
          >
            CONTINUE WITH PHONE NUMBER
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            color={"black"}
            gap={"20px"}
            fontWeight={"800"}
            paddingBottom={"12px"}
          >
            <Center w={"100%"}>
              <Box h={"1.6px"} w={"100%"} bgColor={"#d9dadc"}></Box>
            </Center>
            <Box height={"38px"} paddingTop={"13px"}>
              OR
            </Box>
            <Center w={"100%"}>
              <Box h={"1.6px"} w={"100%"} bgColor={"#d9dadc"}></Box>
            </Center>
          </Center>
        </Center>
        <Box maxW={"450px"} w={"100%"} color={"black"} alignItems={"left"}>
          <Box fontWeight={"700"}>
            <Box paddingBottom={"8px"}>Email address or username</Box>

            <Input
              border={"1px solid #a5a5a5"}
              placeholder="Email address or username"
              height={"48px"}
              _hover={{ borderColor: "black" }}
            ></Input>
          </Box>
          <Box paddingTop={"16px"} fontWeight={"700"} paddingBottom={"16px"}>
            <Box paddingBottom={"8px"}>Password</Box>
            <Input
              border={"1px solid #a5a5a5"}
              placeholder="Password"
              height={"48px"}
              _hover={{ borderColor: "black" }}
            ></Input>
          </Box>
          <Box
            fontSize={"16px"}
            fontWeight={"light"}
            textDecor={"underline"}
            paddingBottom={"16px"}
            _hover={{ color: "#117a37" }}
            cursor={"pointer"}
          >
            Forgot your password?
          </Box>
          <Box
            height={"48px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box maxW={"144px"} w={"100%"} height={"48px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                fontSize={"14px"}
              >
                <Box h="16px" w="16px" borderRadius={"3px"}>
                  <Checkbox colorScheme="green" id="check" />
                </Box>
                <label htmlFor="check">Remember me</label>
              </Box>
            </Box>
            <Box
              w={"121px"}
              h={"48px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex
                className="login"
                w={"100%"}
                bgColor={"#1ed760"}
                h={"48px"}
                borderRadius={"25px"}
                fontWeight={"700"}
                gap={"10px"}
                color={"black"}
                fontSize={"14px"}
                border={"1px solid #A5a5a5"}
                justifyContent={"center"}
                alignItems={"center"}
                letterSpacing={"1.5px"}
              >
                LOG IN
              </Flex>
              <Flex
                className="login"
                w={"123px"}
                bgColor={"#1fdf64"}
                h={"50px"}
                borderRadius={"25px"}
                fontWeight={"700"}
                gap={"10px"}
                color={"black"}
                fontSize={"15px"}
                border={"1px solid #A5a5a5"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                opacity={"0"}
                letterSpacing={"1.5px"}
              >
                LOG IN
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box
          w={"100%"}
          maxW={"450px"}
          paddingTop={"12px"}
          paddingBottom={"20px"}
        >
          <Box height={"1.6px"} w={"100%"} bgColor={"#d9dadc"} />
        </Box>
        <Center
          maxW={"450px"}
          w={"100%"}
          flexDir={"column"}
          paddingBottom={"10px"}
        >
          <Center fontSize={"18px"} paddingBottom={"20px"} fontWeight={"700"}>
            Don't have an account?
          </Center>
          <Center
            w={"100%"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            // gap={"10px"}
            color={"#6a6a6a"}
            border={"1px solid #A5a5a5"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black" }}
          >
            SIGN UP FOR SPOTIFY
          </Center>
        </Center>
      </Center>
    </>
  );
}
