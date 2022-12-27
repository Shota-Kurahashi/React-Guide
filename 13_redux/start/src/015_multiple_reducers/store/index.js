import { createStore, combineReducers } from "redux";

const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
  switch (type) {
    case "+":
      return state + step;
    case "-":
      return state - step;
    default:
      return state;
  }
};
const reducer2 = (state = initialState, { type, step }) => {
  switch (type) {
    case "+":
      return state + step;
    case "-":
      return state - step;
    default:
      return state;
  }
};

const reducers = combineReducers({
  counters: reducer,
  counters2: reducer2,
});

export default createStore(reducers);
