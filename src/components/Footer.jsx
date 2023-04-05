import { RxShuffle } from "react-icons/rx";
import { GiPreviousButton } from "react-icons/gi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { GiNextButton } from "react-icons/gi";
import { RiRepeat2Line } from "react-icons/ri";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Box,
} from "@chakra-ui/react";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { BsPip } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineVolumeUp } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div style={{ justifyContent: "left" }} className="leftSid">
          <div className="album">
            <div>
              <img
                style={{ width: "100%", height: "80px" }}
                src="img/avicii.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="judulSong">
              <h3 style={{ fontSize: "medium" }}>
                Without You (feat. Sandro Cavazza
              </h3>
              <h3 style={{ fontSize: "medium" }}>Avicii, Sandro Cavazza</h3>
            </div>
          </div>
          <div className="leftSide">
            <div>
              <AiOutlineHeart className="leftSymbol" />
            </div>
            <div>
              <BsPip className="leftSymbol" />
            </div>
          </div>
        </div>
        <div className="play-container">
          <div className="play">
            <div className="icon">
              <div>
                <RxShuffle className="simbol2" />
              </div>
              <div>
                <GiPreviousButton className="simbol1" />
              </div>
              <div>
                <BsFillPlayCircleFill className="simbol" />
              </div>
              <div>
                <GiNextButton className="simbol1" />
              </div>
              <div>
                <RiRepeat2Line className="simbol2" />
              </div>
            </div>
            <Flex className="time">
              <span style={{ fontSize: "large" }}>3:28</span>
              <Flex className="progress">
                <Slider aria-label="slider-ex-1" defaultValue={30}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Flex>
              <span style={{ fontSize: "large" }}>5:06</span>
            </Flex>
          </div>
        </div>
        <div className="rightside">
          <div className="volume">
            <div>
              <TbMicrophone2 className="right" />
            </div>
            <div>
              <HiOutlineQueueList className="right" />
            </div>
            <div>
              <RiComputerLine className="right" />
            </div>
            <div>
              <MdOutlineVolumeUp className="right" />
            </div>
            <Flex>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={30}
                width={"100px"}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}
