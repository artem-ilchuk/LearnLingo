import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.head}>
          <NavLink className={s.Logo} to="/">
            <svg className={s.iconLogo} width="28" height="28">
              <use href="/sprite.svg#icon-ukraine" />
            </svg>
            <p className={s.Logo_text}>LearnLingo</p>
          </NavLink>
          <div className={s.nav}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
            <NavLink className={buildLinkClass} to="/catalog">
              Teachers
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
