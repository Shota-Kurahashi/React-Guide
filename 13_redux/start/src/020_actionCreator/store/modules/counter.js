const initialState = 0;
export const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "counter/+":
      return state + payload;
    case "counter/-":
      return state - payload;
    default:
      return state;
  }
};

export const add = (payload) => {
  return {
    type: "counter/+",
    payload,
  };
};

export const minus = (payload) => {
  return {
    type: "counter/-",
    payload,
  };
};
