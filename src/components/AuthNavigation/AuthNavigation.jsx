import s from "./AuthNavigation.module.css";
import { LuLogIn } from "react-icons/lu";

const AuthNavigation = () => {
  const handleLogoutOpenModal = () => {
    dispatch(openLogOutModal());
  };
  return (
    <div className={s.auth_nav}>
      <div className={s.login} onClick={handleLogoutOpenModal}>
        <LuLogIn className={s.icon} />
        <p className={s.log_text}>Log in</p>
      </div>
      <div className={s.button}>
        <button className={s.register}>Registration</button>
      </div>
    </div>
  );
};

export default AuthNavigation;
