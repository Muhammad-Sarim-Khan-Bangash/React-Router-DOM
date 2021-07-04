import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900  text-center">
        Profile
      </h1>
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-900  text-center">
        Hello <span className="text-gray-900">{username}</span>
      </h2>
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-900  text-center">
        My current Location is {location.pathname}
      </h2>
    </div>
  );
};

export default Profile;
