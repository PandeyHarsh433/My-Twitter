import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import profile from "./../assets/profile.jpg";

function ProfileCard({ data }) {
  return (
    <section
      className="mlg:w-[40%] mmd:min-w-[90%] w-[100%] mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg mt-3"
      style={{ fontFamily: "Montserrat" }}
    >
      <div className="flex items-center justify-between bg-[#20354b]">
        <span className="text-gray-400 text-sm bg-[#20354b]">Profile</span>
        <span className="text-emerald-400">
          <FaCheckCircle className="h-6 w-6" />
        </span>
      </div>
      <div className="mt-6 w-fit mx-auto bg-[#20354b]">
        <img
          src={profile}
          className="rounded-full w-28"
          alt="profile picture"
        />
      </div>
      <div className="mt-8 text-center bg-[#20354b]">
        <h2 className="text-white font-bold text-2xl tracking-wide bg-[#20354b]">
          {data && data.name}
        </h2>
        <h2 className="text-white font-bold text-lg my-3 tracking-wide bg-[#20354b]">
          {data && data.username}
        </h2>
      </div>
      <div className="h-1 w-full bg-black mt-8 rounded-full">
        <div className="h-1 rounded-full bg-black"></div>
      </div>
      <div className="mt-3 text-white text-sm flex justify-between item-center px-2 bg-[#20354b]">
        <div className="bg-[#20354b]">
          <span className="text-lg font-bold text-gray-400 pr-1 bg-[#20354b]">
            {data && data.followers}
          </span>
          <span className="text-gray-400 font-semibold text-md bg-[#20354b]">
            Follower
          </span>
        </div>
        <div className="bg-[#20354b]">
          <span className="text-lg font-bold text-gray-400 pr-1 bg-[#20354b]">
            {data && data.followings}
          </span>
          <span className="text-gray-400 font-semibold text-md bg-[#20354b]">
            Following
          </span>
        </div>
      </div>
      <div className="h-1 w-full bg-black mt-8 rounded-full">
        <div className="h-0.5 rounded-full bg-black"></div>
      </div>
      <div className="mt-3 text-center text-blue-600 text-lg cursor-pointer hover:text-blue-700 bg-[#20354b]">
        Find new people
      </div>
    </section>
  );
}

export default ProfileCard;
