import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorphoto from "../../assets/errorPage/error404.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex items-center h-full px-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-2">
        <div className="w-5/6  text-center">
          <img className="w-2/3 mx-auto" src={errorphoto} alt="" />
          <p className="text-red-400">{error.statusText || error.message}</p>

          <p className="text-xl font-semibold lg:text-2xl">
            Sorry, we couldn't connect the dots.
          </p>
          <p className="mt-2 mb-6 dark:text-gray-400">
            This page was not found.You may have mistyped the address or the
            page may have moved.
          </p>
          <Link
            to="/"
            rel="noopener noreferrer"
            className="font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            <button className="bg-blue-500 text-white p-2 rounded">
              Take me to the home page
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
