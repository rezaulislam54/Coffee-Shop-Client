import { useNavigation } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import FlowUS from "../components/FlowUS";
import Hero from "../components/Hero";
import OurPopularProduct from "../components/OurPopularProduct";
import Sponser from "../components/Sponser";

const Hompage = () => {
  return (
    <div>
      <Hero></Hero>
      <Sponser></Sponser>
      <OurPopularProduct></OurPopularProduct>
      <FlowUS></FlowUS>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Hompage;
