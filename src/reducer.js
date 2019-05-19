
function updateState(state, action) {
  if (action.type === "INCREMENT") {
    return {count: state.count + action.amount};
  } else if (action.type === "DECREMENT") {
    return {count: state.count - action.amount};
  } else {
    return state;
  }
}

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];
  }

  update(action){
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback());
  };

  subscribe(callback){
    this._callbacks.push(callback);
    return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
  }

  get state() {
    return this._state;
  };

}

const initialState ={count: 0};

const store = new Store(updateState, initialState);

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

//const unsubscribe = store.subscribe(() => console.log("State Changed 1", store.state));
store.subscribe(() => console.log("State Changed", store.state));

store.update(incrementAction);
//unsubscribe();
store.update(decrementAction);
store.update( {});

