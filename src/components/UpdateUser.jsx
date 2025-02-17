import { useContext } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const { setUserName } = useContext(UserContext);

  const updateInfo = (e) => {
    e.preventDefault();
    setUserName(e.target.username.value);
    e.target.username.value = "";
  };
  return (
    <div>
      <form onSubmit={updateInfo}>
        <label htmlFor="username">Update Username</label>
        <br />
        <input type="text" name="username" id="username" />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
