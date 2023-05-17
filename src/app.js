import { store } from "./index";
export function app() {
  console.log(store.getState());
  const root = document.getElementById("root");
  root.append("hello mr :" + store.getState().name);
}
