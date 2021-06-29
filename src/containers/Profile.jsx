import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900  text-center">
        Profile
      </h1>
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-900  text-center">
        {username}
      </h2>
    </div>
  );
};

export default Profile;
