import { Data, Data1 } from "../App";
const ComponentC = () => {
  return (
    <div>
      <Data.Consumer>
        {(name) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    My name is: {name} and Im {age} years old
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </div>
  );
};

export default ComponentC;
