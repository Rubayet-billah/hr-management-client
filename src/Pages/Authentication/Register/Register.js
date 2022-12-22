import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import RegPic from "../../../assets/registationPage/RegPic.jpg";

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
            // console.log(name, email, role);
          })
          .catch((error) => console.log(error));
        // console.log(user);
      })
      .catch((error) => {
        setSignupError(error.message);
        // console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="mb-10 ">
        <img className="rounded-lg" src={RegPic} alt="regPic" />
      </div>
      <div className="flex justify-center items-center">
        <div className=" w-96 p-8 rounded-lg ">
          <h3 className="text-5xl text-center">Sign Up</h3>
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
                className="input rounded-lg input-bordered w-full max-w-xs"
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
                className="input rounded-lg input-bordered w-full max-w-xs"
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
                className="input rounded-lg input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <input
              className="btn my-2 text-white text-xl bg-blue-500   hover:bg-blue-600 rounded-lg w-full p-3"
              value="Sign Up"
              type="submit"
            />
          </form>
          {signupError && <p className="text-red-600">{signupError}</p>}
          <p className="font-semibold">
            Alreday have an account ?
            <Link
              to="/login"
              className=" text-xl ml-2 text-blue-700  hover:font-bold "
            >
              Please login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
