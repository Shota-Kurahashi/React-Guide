import { produce } from "immer";

const state = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const newState = produce(state, (draft) => {
  draft.name = "wao";
  draft.address.city = "LA";
  console.log(draft);
});

console.log(newState, state);
