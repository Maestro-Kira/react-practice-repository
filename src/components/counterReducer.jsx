export const initialState = {
  counter: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };

    case "decrement":
      return { ...state, counter: state.counter - action.value };

    case "reset":
      return { ...state, counter: 0 };

    default:
      return state;
  }
};
