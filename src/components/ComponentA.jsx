import React, { useContext } from "react";
import { AppContext } from "./Context";
const ComponentA = () => {
  const { message, setMessage } = useContext(AppContext);

  return (
    <div>
      {message}
      <br />

      <button
        type="button"
        onClick={() => setMessage("I am updated  Message after clicky")}
      >
        Click me
      </button>
    </div>
  );
};

export default ComponentA;
