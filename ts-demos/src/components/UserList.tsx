// https:jsonplaceholder.typecode.com/users

import { useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [userInfo, setUserInfo] = useState<UserData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setUserInfo(result);
      } catch (error) {
        console.error("An error happened during fetch", error);
      }
    };

    fetchData();
  }, []);

  console.log(userInfo);

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
