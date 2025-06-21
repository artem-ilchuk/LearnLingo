import { useDispatch } from "react-redux";
import s from "./AuthNavigation.module.css";
import { LuLogIn } from "react-icons/lu";
import { openLoginModal, openRegistrationModal } from "../../redux/modal/slice";

const AuthNavigation = () => {
  const dispatch = useDispatch();

  const handleLoginModalOpen = () => {
    dispatch(openLoginModal());
  };

  const handleRegistrationModalOpen = () => {
    dispatch(openRegistrationModal());
  };

  return (
    <div className={s.auth_nav}>
      <div className={s.login} onClick={handleLoginModalOpen}>
        <LuLogIn className={s.icon} />
        <p className={s.log_text}>Log in</p>
      </div>
      <div className={s.button}>
        <button className={s.register} onClick={handleRegistrationModalOpen}>
          Registration
        </button>
      </div>
    </div>
  );
};

export default AuthNavigation;
