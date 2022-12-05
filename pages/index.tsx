import { NextPage } from "next";
import About from "../components/Homepage/About";
import Carousel from "../components/Homepage/Carousel";
import Contact from "../components/Homepage/Contact";
import Location from "../components/Homepage/Location";
import Main from "../components/Homepage/Main";
import Menu from "../components/Homepage/Menu";

const Homepage: NextPage = () => {
  return (
    <div>
      <Main />
      <About />
      <Carousel />
      <Menu />
      <Contact />
      <Location />
    </div>
  );
};

export default Homepage;
