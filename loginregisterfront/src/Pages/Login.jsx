import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  let [pstatus ,setpstatus] = useState(false);


  async function userLogin(ev) {
    ev.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("Login Successful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form
      className="bg-purple-300 flex flex-col items-center justify-center py-16 shadow-2xl"
      onSubmit={userLogin}
      action=""
    >
      <div className="bg-white px-24 flex flex-col items-center justify-center gap-4 py-8">
        <div className="py-2 px-3 text-red-600 text-3xl font-bold">
          <h1>LOGIN</h1>
        </div>
        <div className="py-2 px-3 w-80 flex flex-col gap-3 text-gray-500 text-xl">
          <label for="email">Email</label>
          <input
            value={email}
            onChange={(ev) => setemail(ev.target.value)}
            className="border rounded-xl w-full p-3"
            type="email"
            name="email"
            placeholder="Email123@.gmail.com"
            />
        </div>
        <div className="py-2 px-3 flex flex-col gap-3 text-gray-500 text-xl">
          <label for="email">Password</label>
          <div className="flex flex-row border rounded-xl items-center gap-1 p-1">
          <input
            value={password}
            onChange={(ev) => setpassword(ev.target.value)}
            className="p-2 outline-none"
            type={(pstatus)?'text':'password'}
            name="email"
            placeholder="xyz123@#!"
          />
          <div className='' onClick={()=>setpstatus(!pstatus)}>{(pstatus)?'Hide':'Show'}</div>
          </div>
        </div>
        <div className="bg-white py-2 px-20">
          <button className="text-white rounded-md bg-red-600 p-3 px-6 font-semibold text-xl">
            Login
          </button>
        </div>
        <div className="text-sm text-black">
          <p>If you haven't acoount, Register to login</p>
          <a className="text-blue-600 underline" href="/register">
            register
          </a>
        </div>
      </div>
    </form>
  );
};
