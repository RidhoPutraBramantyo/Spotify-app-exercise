import { FaBeer } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button, Box } from "@chakra-ui/react";
import "../CSS/Navbar.css";

export default function Navbar() {
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
            <button id="registration">Daftar</button>
            <button id="login">Masuk</button>
          </div>
        </div>
      </div>
    </>
  );
}
