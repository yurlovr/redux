//
// import Store from "./store/store";
// function updateState(state, action) {
//   if (action.type === "INCREMENT") {
//     return {count: state.count + action.amount};
//   } else if (action.type === "DECREMENT") {
//     return {count: state.count - action.amount};
//   } else {
//     return state;
//   }
// }
//
// const initialState ={count: 0};
//
// const store = new Store(updateState, initialState);
//
// const incrementAction = { type: "INCREMENT", amount: 5 };
// const decrementAction = { type: "DECREMENT", amount: 3 };
//
// //const unsubscribe = store.subscribe(() => console.log("State Changed 1", store.state));
// store.subscribe(() => console.log("State Changed", store.state));
//
// store.update(incrementAction);
// //unsubscribe();
// store.update(decrementAction);
// store.update( {});
//
