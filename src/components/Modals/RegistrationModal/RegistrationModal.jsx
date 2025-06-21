import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import s from "./Registration.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUserThunk } from "../../../redux/auth/operations";
import { closeRegistrationModal } from "../../../redux/modal/slice";

const RegistrationModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(30, "Too long!")
      .required("Name required"),
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
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(registerUserThunk(values)).unwrap();
      navigate("/teachers");
      reset();
      dispatch(closeRegistrationModal());
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.formContainer}>
        <svg
          className={s.closeIcon}
          width="16"
          height="16"
          onClick={() => dispatch(closeRegistrationModal())}
        >
          <use href="/sprite.svg#icon-x" />
        </svg>

        <h2 className={s.title}>Registration</h2>
        <p className={s.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>

        <label htmlFor="name" className={s.switch}>
          Name
          <input
            {...register("name")}
            type="text"
            id="name"
            className={s.name}
            autoComplete="name"
            aria-label="Name"
          />
          <span className={s.eror}>{errors.name?.message}</span>
        </label>

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
              autoComplete="new-password"
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
          {isSubmitting ? "Register..." : "Register"}
        </button>
      </div>
    </form>
  );
};

export default RegistrationModal;
