import s from "./Header.module.css";
import Navigation from "../Navigation/navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.head}>
          <Navigation />
          <AuthNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
