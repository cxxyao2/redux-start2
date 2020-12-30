import store from "./store";
store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch({ type: "bugAddded", payload: { description: "bug1" } });
store.dispatch({ type: "bugAddded", payload: { description: "bug2" } });
store.dispatch({ type: "bugAddded", payload: { description: "bug3" } });
store.dispatch({ type: "bugResolved", payload: { id: 3 } });
console.log(store.getState());
