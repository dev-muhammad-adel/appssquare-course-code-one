import { createStore } from "redux";
import { app } from "./app";
const initialState = {
  name: "Ahmed",
};

const store = createStore((state = initialState, action) => {
  if (action.type === "changeName") {
    return {
      name: action.payload,
    };
  }
  if (action.type === "changeName") {
    return {
      name: action.payload,
    };
  }
  return initialState;
});

// store.dispatch({
//   type: "changeName",
//   payload: "mohamed",
// });
store.subscribe(app());

export { store };
