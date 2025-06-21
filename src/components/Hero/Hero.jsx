import s from "./Hero.module.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.content}>
          <div className={s.actionCall}>
            <h1 className={s.hero_title}>
              Unlock your potential with the best{" "}
              <span className={s.highlight}>language</span> tutors
            </h1>

            <p className={s.hero_text}>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <NavLink to="/teachers" className={s.nav}>
              Get started
            </NavLink>
          </div>
          <div className={s.image}>
            <img
              src="/Boy.1x.webp"
              srcSet="/Boy.2x.webp 2x"
              alt="Cartoon image of a boy with a laptop."
              className={s.hero_img}
            />
            <div className={s.laptopLogo}></div>
            <svg className={s.macLogo} width="46" height="56">
              <use href="/sprite.svg#icon-Mac" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
