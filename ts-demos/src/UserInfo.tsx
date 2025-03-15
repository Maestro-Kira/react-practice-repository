import { Info } from "./types";

const UserInfo = ({ id, name, surname, age, email, online }: Info) => {
  return (
    <div>
      <h1>User Information</h1>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h2>{surname}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
      <h2>{online ? "Online" : "Offline"}</h2>
    </div>
  );
};

export default UserInfo;
