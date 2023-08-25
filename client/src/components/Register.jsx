import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authSlice";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      toast.error("Password and Confirm password are not same..!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else {
      await dispatch(registerUser({ name, username, email, password }));
      window.location.href = "/";
    }
  };

  return (
    <div className="font-mono bg-gray-400">
      {/* Container */}
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
              }}
            ></div>
            <div className="w-full lg:w-7/12  p-5 rounded-lg lg:rounded-l-none bg-white">
              <h3 className="pt-4 text-2xl text-center bg-white">
                Create an Account!
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded "
                onSubmit={(event) => handleSubmit(event)}
              >
                <div className="mb-4 md:flex md:justify-between bg-white">
                  <div className="mb-4 md:mr-2 md:mb-0 bg-white">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 bg-white"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-white"
                      id="name"
                      type="text"
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:ml-2 bg-white">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 bg-white"
                      htmlFor="User_Name"
                    >
                      Username
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-white"
                      id="userName"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 bg-white">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 bg-white"
                    htmlFor="email "
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-white"
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between bg-white">
                  <div className="mb-4 md:mr-2 md:mb-0 bg-white">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 bg-white"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-white"
                      id="password"
                      type="password"
                      placeholder="******************"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:ml-2 bg-white">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 bg-white"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-white"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6 text-center bg-white">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline "
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center bg-white">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 bg-white"
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
