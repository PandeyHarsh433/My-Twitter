import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BsList, BsX } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  return (
    <Disclosure as="nav" className="transparent">
      {({ open }) => (
        <div className="w-full mr-10">
          <div className="mx-auto pt-3 px-2 sm:px-6 lg:px-8 w-[100vw]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <Link to="/">
                  <div className="flex flex-shrink-0 items-center mr-[10%]">
                    <img
                      className="h-12 w-auto"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                </Link>
                <div className="relative lg:block my-1 smd:hidden">
                  <span className="absolute left-0 top-0 mt-1 ml-2 text-4xl font-bold text-gray-700 bg-gray-600">
                    #
                  </span>
                  <input
                    className=" bg-gray-600 h-12 pl-[2.5rem] pr-[0.5rem] rounded-lg text-lg focus:outline-none text-white w-80 mlg:w-60 "
                    type="search"
                    name="search"
                    placeholder="Explore"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-2"
                  >
                    <FaSearch className="text-gray-800 h-6 w-6 fill-current bg-gray-600" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-700">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(
                              active ? "bg-gray-600" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            to="#"
                            className={classNames(
                              active ? "bg-gray-600" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                            onClick={handleSignOut}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-4 flex justify-center align-center rounded-full">
            <div className="relative lg:hidden my-1 smd:block hidden">
              <span className="absolute left-0 top-2 mt-0 ml-2 text-4xl font-bold text-gray-700 bg-gray-600">
                #
              </span>
              <input
                className=" bg-gray-600 h-10 pl-[2.5rem] pr-[0.5rem] rounded-[1.5rem] text-xl focus:outline-none text-white p-[2rem] w-[19rem] smd:w-[100%]"
                type="search"
                name="search"
                placeholder="Explore"
              />
              <button
                type="submit"
                className="absolute right-0 top-2 mt-3 mr-3"
              >
                <FaSearch className="text-gray-800 h-6 w-6 fill-current bg-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
