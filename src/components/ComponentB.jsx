import React, { useContext } from "react";
import { AppContext } from "./Context";

const ComponentB = () => {
  const { message2, setMessage2 } = useContext(AppContext);

  return (
    <div>
      {message2}
      <br />
      <button
        onClick={() => {
          setMessage2("I am updatedMESSAGAGE2");
        }}
      >
        Hi
      </button>
    </div>
  );
};

export default ComponentB;
