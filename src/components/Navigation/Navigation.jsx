import s from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div className={s.head}>
      <NavLink className={s.logo} to="/">
        <svg className={s.iconLogo} width="28" height="28">
          <use href="/sprite.svg#icon-ukraine" />
        </svg>
        <p className={s.logo_text}>LearnLingo</p>
      </NavLink>
      <div className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/teachers">
          Teachers
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
