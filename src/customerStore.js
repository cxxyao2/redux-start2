// 实现一个自定义的store,
// getState， 返回一个state,
// subscribe,订阅一个listener
import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = []; // listener是函数,在store执行dispatch是被callback
  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}

// 创建一个object，
export default createStore(reducer);
