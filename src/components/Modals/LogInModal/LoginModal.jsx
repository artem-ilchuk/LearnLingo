import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import s from "./LoginModal.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUserThunk } from "../../../redux/auth/operations";
import { closeLoginModal } from "../../../redux/modal/slice";

const LoginModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      )
      .required("Email required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .max(50, "Too long!")
      .required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(loginUserThunk(values)).unwrap();
      navigate("/teachers");
      reset();
      dispatch(closeLoginModal());
    } catch (err) {
      toast.error("Login failed. Please check your email or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.formContainer}>
        <svg
          className={s.closeIcon}
          width="16"
          height="16"
          onClick={() => dispatch(closeLoginModal())}
          role="button"
          tabIndex={0}
        >
          <use href="/sprite.svg#icon-x" />
        </svg>

        <h2 className={s.title}>Log in</h2>
        <p className={s.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a teacher.
        </p>

        <label htmlFor="email" className={s.switch}>
          Email
          <input
            {...register("email")}
            type="email"
            id="email"
            className={s.email}
            autoComplete="email"
            aria-label="Email"
          />
          <span className={s.eror}>{errors.email?.message}</span>
        </label>

        <label htmlFor="password" className={s.switch}>
          Password
          <div className={s.passwordWrapper}>
            <input
              {...register("password")}
              type={passwordVisible ? "text" : "password"}
              id="password"
              className={s.password}
              autoComplete="current-password"
              aria-label="Password"
            />
            <span
              className={s.toggleIcon}
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <span className={s.eror}>{errors.password?.message}</span>
        </label>
        <button
          type="submit"
          className={s.submitBtn}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
      </div>
    </form>
  );
};

export default LoginModal;
