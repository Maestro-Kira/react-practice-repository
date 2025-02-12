import { useState } from "react";
const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
  });

  const changeData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInfo((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
    console.log(userInfo);
  };

  return (
    <div>
      <h1>Update User Info</h1>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={userInfo.name}
        onChange={changeData}
      />

      <label>Age</label>
      <input
        type="number"
        name="age"
        value={userInfo.age}
        onChange={changeData}
      />
      <br />
      <ul>
        <p>{userInfo.name}</p>
        <p>{userInfo.age}</p>
      </ul>
    </div>
  );
};

export default Profile;
