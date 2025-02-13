import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("USE EFFECT ACTIVATED");
  }, []);

  return <div>BasicEffect</div>;
};

export default BasicEffect;
