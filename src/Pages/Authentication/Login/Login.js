import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import image_hr from "../../../assets/loginPage/slider2.svg";
import { Spinner } from "flowbite-react";
import { credentials } from "../../../constants/constants";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, loading, setLoading } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  // using location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (data) => {
    setLoginError("");
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.massage);
        setLoginError(error.message);
      });
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-lime-100 py-16 lg:pl-16">
        <div className="hidden lg:block">
          <img src={image_hr} alt="hrPic" />
        </div>
        <div className="w-96 mx-auto p-8 rounded-lg flex justify-center items-center bg-white ">
          <div className="w-72 py-8">
            <h3 className="text-xl text-center mb-8">ADMIN LOGIN</h3>
            <form className="" onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full mb-4">
                <label className="label mb-2 font-semibold">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Enter email"
                  type="email"
                  className="input  rounded input-bordered w-full mt-2 "
                  defaultValue={credentials.email}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label my-2  flex justify-between items-center">
                  <span className="label-text font-semibold ">Password</span>
                  <span className="label-text text-sm hover:underline">
                    <Link to="">Forgot password?</Link>
                  </span>
                </label>

                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "password must be at least 6 charecters or longer",
                    },
                  })}
                  placeholder="password"
                  type="password"
                  className="input rounded input-bordered w-full "
                  defaultValue={credentials.password}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <button
                className="btn mb-3 mt-5 text-white  bg-blue-700  hover:bg-blue-800 rounded-lg w-full py-2"
                value="Login"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">
                    <Spinner />
                  </span>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <p className="mt-2 text-sm">
              Don't have an account yet?
              <Link to="/" className=" ml-1 text-blue-600 hover:underline">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
