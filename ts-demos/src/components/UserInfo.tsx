import React from "react";
import { Info } from "../types";

type UserInfoProp = {
  user: Info;
};

const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      <h2>User info:</h2>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserInfo;
