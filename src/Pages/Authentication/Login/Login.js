import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

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
      <div className="h-[800px] flex justify-center items-center ">
        <div className=" w-96 p-8 bg-green-500 rounded-lg">
          <h3 className="text-xl text-center">Login</h3>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="email"
                type="email"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
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
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                <span className="label-text"> Forgate password?</span>
              </label>
            </div>

            <button
              className="btn bg-green-600 hover:bg-green-700 w-full"
              value="Login"
              type="submit"
            >
              Sign in
            </button>
          </form>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <p>
            New to HR ?
            <Link to="/register" className="text-primary">
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
