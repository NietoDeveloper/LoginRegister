import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-violet-400 grid grid-cols-2 gap-3">
      <div className="px-10 m-2 pt-20 pb-4 shadow-xl bg-slate-300 flex flex-col gap-3 items-center">
        <div className="p-4 bg-violet-200 mb-10 shadow-sm">
          <h1 className="text-orange-600 text-4xl font-bold">Login Section</h1>
        </div>
        <h2 className="font-bold pt-2 text-white text-2xl">
          Hi!!!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h2>
        <h3 className="text-red-500 text-3xl font-semibold">
          Welcome to the page dude
        </h3>
        <h4 className="text-white text-3xl font-medium pb-6">
          If you have already account,please login !
        </h4>
        <div className="w-full text-white">
          <hr />
        </div>
        <div className="bg-white text-red-600 text-3xl font-semibold flex flex-col items-center my-4 shadow-2xl w-36 py-4 px-8">
          <Link to={"/login"}>Login</Link>
        </div>
        <div className="w-full text-white">
          <hr />
        </div>
      </div>


      <div className="px-10 m-2 pt-20 pb-4 shadow-xl bg-slate-300 flex flex-col gap-3 items-center">
        <div className="p-4 bg-violet-200 mb-10 shadow-sm">
          <h1 className="text-orange-600 text-4xl font-bold">Registration Section</h1>
        </div>
        <h2 className="font-bold pt-2 text-white text-2xl">
          Hi!!!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h2>
        <h3 className="text-red-500 text-3xl font-semibold">
          Welcome to the page dude
        </h3>
        <h4 className="text-white text-3xl font-medium pb-6">
          If you don't have account,please register !
        </h4>
        <div className="w-full text-white">
          <hr />
        </div>
        <div className="bg-white text-red-600 text-3xl font-semibold flex flex-col items-center my-4 shadow-2xl w-40 py-4 px-8">
          <Link to={"/register"}>Register</Link>
        </div>
        <div className="w-full text-white">
          <hr />
        </div>
      </div>
    </div>
  );
};
