import Image from "next/image";
import Link from "next/link";
import english_flag from "../../utils/english_flag.png";
import logo from "../../utils/logo.png";
import romanian_flag from "../../utils/romanian_flag.png";
import { Dancing_Script, Roboto } from "@next/font/google";

const Main = () => {
  return (
    <div
      id="home-section"
      className="min-h-screen text-center relative text-white text-lg"
    >
      <Navbar />
      <MainText />
      <Scroll />
    </div>
  );
};

export default Main;

const Navbar = () => {
  const ELEMENTS = [
    { title: "Home", id: "#home-section", scrollTo: "" },
    { title: "About us", id: "#about-us-section", scrollTo: "" },
    { title: "News", id: "#news-section", scrollTo: "" },
    { title: "Menu", id: "#menu-section", scrollTo: "" },
    { title: "Contact", id: "#contact-section", scrollTo: "" },
  ];

  const LANGUAGES = [
    { image: english_flag, lng_code: "en" },
    { image: romanian_flag, lng_code: "ro" },
  ];

  const getElements = () => {
    return ELEMENTS.map((element, index) => {
      const { scrollTo, title, id } = element;

      return (
        <span key={id}>
          <Link href={scrollTo}>{title}</Link>
          {index < ELEMENTS.length - 1 && <span className="px-4">\</span>}
        </span>
      );
    });
  };

  const getLanguages = () => {
    return LANGUAGES.map((language) => {
      const { image, lng_code } = language;

      return (
        <Image
          className="h-6 px-2 cursor-pointer w-auto"
          key={lng_code}
          alt={lng_code}
          src={image}
        />
      );
    });
  };

  return (
    <div className="uppercase font-medium">
      <Image alt="logo" src={logo} className="mx-auto pt-4 pb-6 h-60 w-auto" />
      <div>{getElements()}</div>
      <div className="justify-center flex items-center mt-4">
        {getLanguages()}
      </div>
    </div>
  );
};

const dancing_script = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const MainText = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-6xl font-bold">
      <div
        className={`text-4xl mb-1 text-yellow-400 font-bold ${dancing_script.className}`}
      >
        Welcome to Burgers & Beer
      </div>
      <div id="main-text" className={`${roboto.className} tracking-tight`}>
        WE ARE HAPPY TO COOK <br /> FOR YOU TODAY!
      </div>
    </div>
  );
};

const Scroll = () => {
  return <div>Scroll</div>;
};
