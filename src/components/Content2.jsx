import "../CSS/Content2.css";
import { Box } from "@chakra-ui/react";
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

  // return (
  //   <>
  //     <div className="pembungkus4content  ">
  //       {arrContent.map((val) => (
  //         <Belanja {...val} />
  //       ))}
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="mainBox">
        <div className="box">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="fokus">Fokus</div>
            <div className="tampilkan">Tampilkan semua</div>
          </div>

          <div className="pembungkus4content">
            {arrContent.map((val) => (
              <Belanja {...val} />
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="fokus">Playlist Spotify</div>
            <div className="tampilkan">Tampilkan semua</div>
          </div>

          <div className="pembungkus4content2">
            {arrContent.map((val) => (
              <Belanja {...val} />
            ))}
          </div>
        </div>
      </div>
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
