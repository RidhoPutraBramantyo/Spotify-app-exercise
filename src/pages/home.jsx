import { Center, useFocusEffect } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // useFocusEffect(() => {
  //   console.log("ketikan baru");
  // }, [account.password]);

  // const [loading, setLoading] = useState(true);

  // let nav = useNavigate;

  // useFocusEffect(() => {
  //   // masuk sini pada saat load page
  //   if (propNames.user != "udin") {
  //     alert("bukan udin");
  //   }
  // }, []);

  return (
    <>
      <Footer />
    </>
  );
}
