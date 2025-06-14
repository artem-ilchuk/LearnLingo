import s from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Achievements from "../../components/Achievements/Achievements";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Achievements />
    </div>
  );
};

export default HomePage;
