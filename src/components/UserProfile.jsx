import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>
      <h1>My username is: {userName}</h1>
    </div>
  );
};

export default UserProfile;
