import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function userRegister(event) {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not match,Registration failed");
    } else {
      try {
        await axios.post("/register", {
          name,
          email,
          password,
          confirmPassword,
        });
        alert("Registration Successful. Now you can login");
        setRedirect(true);
      } catch (e) {
        alert("Registration failed.Please try again later");
      }
    }
  }
  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <form
      className="bg-purple-300 py-12 flex flex-col justify-center items-center shadow-2xl"
      onSubmit={userRegister}
      action=""
    >
      <div className="bg-white pt-4 px-20 pb-2 flex flex-col items-start justify-center text-xl text-gray-500">
        <div className="flex justify-between flex-col items-center">
          <h1 className="text-3xl pl-20 font-bold mb-4 text-red-600">
            REGISTER
          </h1>
        </div>
        <div className="p-2 flex flex-col items-start gap-4">
          <label for="username">Username</label>
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="border rounded-xl w-full p-2"
            type="text"
            name="username"
            placeholder="Nikhilesh Tiwari"
          />
        </div>
        <div className="p-2 flex flex-col items-start gap-4">
          <label for="email">Email</label>
          <input
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="border rounded-xl w-full p-2"
            type="email"
            name="email"
            placeholder="nikh@gmail.com"
          />
        </div>
        <div className="p-2 flex flex-col items-start gap-4">
          <label for="password">Password</label>
          <input
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="border rounded-xl w-full p-2"
            type="password"
            name="password"
            placeholder="xyz123@#!"
          />
        </div>
        <div className="p-2 flex flex-col items-start gap-4">
          <label for="confirm_password">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            className="border rounded-xl w-full p-2"
            type="password"
            name="confirm_password"
            placeholder="xyz123@#!"
          />
        </div>
        <div className="bg-white py-2 px-20">
          <button className="text-white rounded-md bg-red-600 p-3 px-6 font-semibold text-xl">
            Register
          </button>
        </div>
        <div className="text-sm text-black">
          <p>you have already registered with this email</p>
          <a className="text-blue-600 underline" href="/login">
            login
          </a>
        </div>
      </div>
    </form>
  );
};
