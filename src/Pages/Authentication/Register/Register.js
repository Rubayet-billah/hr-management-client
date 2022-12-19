import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");

  const handlerSignUp = (data) => {
    console.log(data);
    setSignupError("");
    const { email, password, name, role } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast("Successfully create user", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            console.log(name, email, role);
          })
          .catch((error) => console.log(error));
        console.log(user);
      })
      .catch((error) => {
        setSignupError(error.message);
        console.log(error);
      });
  };
  return (
    <div className="h-[800px] flex  justify-center items-center ">
      <div className=" w-96 p-8 bg-green-500 rounded-lg">
        <h3 className="text-xl text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(handlerSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              placeholder="Your Name"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              placeholder="email"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              placeholder="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "must be atleast 6 disits" },

                pattern: {
                  value: /[A-Z]/,
                  message: "password must be capital letter",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn bg-green-600 hover:bg-green-700 w-full mt-2"
            value="Sign Up"
            type="submit"
          />
        </form>
        {signupError && <p className="text-red-600">{signupError}</p>}
        <p>
          Alreday have an account ?
          <Link to="/login" className=" text-lg font-semibold">
            Please login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
