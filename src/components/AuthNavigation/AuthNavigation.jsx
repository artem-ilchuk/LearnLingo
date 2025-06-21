import { useDispatch, useSelector } from "react-redux";
import s from "./AuthNavigation.module.css";
import { LuLogIn } from "react-icons/lu";
import { openLoginModal, openRegistrationModal } from "../../redux/modal/slice";
import {
  selectIsLogInModalOpen,
  selectIsRegistrationModalOpen,
} from "../../redux/modal/selectors";
import LoginModal from "../Modals/LogInModal/LoginModal";
import RegistrationModal from "../Modals/RegistrationModal/RegistrationModal";

const AuthNavigation = () => {
  const dispatch = useDispatch();
  const isLoginModalOpen = useSelector(selectIsLogInModalOpen);
  const isRegistrationModalOpen = useSelector(selectIsRegistrationModalOpen);
  const handleLoginModalOpen = () => {
    dispatch(openLoginModal());
  };

  const handleRegistrationModalOpen = () => {
    dispatch(openRegistrationModal());
  };

  return (
    <>
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
      {isLoginModalOpen && <LoginModal />}
      {isRegistrationModalOpen && <RegistrationModal />}
    </>
  );
};

export default AuthNavigation;
