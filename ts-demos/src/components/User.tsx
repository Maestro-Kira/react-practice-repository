import { FC } from "react";

type UserShape = {
  name: string;
  age: number;
  isStudent: boolean;
  status: boolean;
};

const User: FC<UserShape> = ({ name, age, isStudent, status }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
      <h1>{status}</h1>
    </div>
  );
};

export default User;
