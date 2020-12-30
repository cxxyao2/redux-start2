import store from "./store";

console.log(store);
// 创建一个函数reducer， 参数是(state, action). 根据action.type，返回不同state.
// store = createStore(reducer); 创建store时已经包含了reducer
// store.dispatch(action)  action:一个js对象,包含了 type和payload
// store.getState()  得到state，就是一个数组
// unsubscribe = store.subscribe(listener)  listener是一个函数。每次state发生变化时触发
// unsubscribe()

// reducer, state, action, store
// state! 核心
const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({
  type: "bugAddded",
  payload: {
    description: "BUG 1",
  },
});

store.dispatch({
  type: "bugAddded",
  payload: {
    description: "BUG 2",
  },
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 2,
  },
});

console.log(store.getState());
