import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinar from "../components/Spinar";

const MainLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Spinar />;
  return (
    <div className="bg-white">
      <div className="container mx-auto px-5 md:px-10">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
