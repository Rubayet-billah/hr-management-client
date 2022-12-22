import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import image_hr from "../../../assets/loginPage/hr1.PNG";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, loading } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        toast("Successfully user login", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.log(error.massage);
        setLoginError(error.message);
      });
  };
  return (
    <>
      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <img src={image_hr} alt="hr" />
        </div>
        <div className=" w-96 p-8 rounded-lg lg:ml-32">
          <h3 className="text-5xl text-center">Login</h3>
          <form className="" onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control text-xl w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="email"
                type="email"
                className="input  rounded-lg input-bordered w-full "
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control text-xl  w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "password should be at least 6 carecter must",
                  },
                })}
                placeholder="password"
                type="password"
                className="input  rounded-lg input-bordered w-full "
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                <span className="label-text"> Forgate password?</span>
              </label>
            </div>

            <button
              className="btn my-2 text-white text-xl bg-blue-500   hover:bg-blue-600 rounded-lg w-full p-3"
              value="Login"
              type="submit"
            >
              Sign in
            </button>
          </form>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <p className="text-xl">
            New to HR ?
            <Link
              to="/register"
              className=" ml-2 text-blue-600 hover:font-bold "
            >
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
