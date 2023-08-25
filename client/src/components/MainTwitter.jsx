import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import TweetBox from "./TweetBox";
import Tweets from "./Tweets";
import RightMenu from "./RightMenu";
import { fetchUserData, selectUserData } from "../redux/auth/authSlice";

const MainTwitter = () => {
  const [profileData, setProfileData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const data = useSelector(selectUserData);

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    setProfileData(data);
  }, [data]);

  return (
    <div className="flex usmd:mr-5 usmd:-ml-10 mmd:-ml-[4rem] smd:-mr-[7rem]">
      <div className="w-1/4 p-4 mlg:hidden">
        <ProfileCard data={profileData} />
      </div>
      <div className="w-1/2 p-4 mlg:w-[75%] mlg:mx-auto smd:pl-[0]">
        <Tweets />
      </div>
      <div className="w-1/4 p-4 mlg:hidden">
        <RightMenu />
      </div>
    </div>
  );
};

export default MainTwitter;
