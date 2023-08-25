import React, { useState, useEffect } from "react";
import ProfileCard from "./../components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./../components/Navbar";
import { fetchUserData, selectUserData } from "../redux/auth/authSlice";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const data = useSelector(selectUserData);

  useEffect(() => {
    setProfileData(data);
  }, [data]);

  return (
    <div>
      <Navbar />
      <ProfileCard data={profileData} />
    </div>
  );
};

export default Profile;
