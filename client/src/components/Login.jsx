import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {}, [dispatch]);

  return (
    <form
      className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <FaUser className="w-20 h-20 text-blue-600 mb-2 bg-white" />
      <p className="mb-5 text-3xl uppercase text-gray-600 bg-white">Login</p>
      <input
        type="email"
        name="email"
        className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none bg-white"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none bg-white"
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button
        className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
        type="submit"
      >
        <span className="bg-transparent">Login</span>
      </button>
      <Link
        to="/register"
        className="item-center text-blue-600 bg-white pt-3 cursor-pointer hover:text-blue-800"
      >
        Register?
      </Link>
    </form>
  );
};

export default LoginForm;
