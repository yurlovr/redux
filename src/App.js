// import React, { Component } from "react";
// import "./App.css";
// import { createStore } from "redux";
//
// const initialState = { count: 0 };
//
// function reducer(state = { count: 0 }, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + action.amount };
//     case "DECREMENT":
//       return { count: state.count - action.amount };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }
//
//
// function increment(amount) {
//     return {type: "INCREMENT", amount}
// }
//
// function decrement(amount) {
//     return {type: "DECREMENT", amount}
// }
// function reset() {
//     return {type: "RESET"}
// }
//
// const store = createStore(
//   reducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.reset = this.reset.bind(this);
//   }
//
//   componentDidMount() {
//     store.subscribe(() => this.forceUpdate());
//   }
//
//   increment() {
//     let amount = +this.refs.amount.value || 1;
//     store.dispatch(increment(amount));
//   }
//
//   decrement() {
//     let amount = +this.refs.amount.value || 1;
//     store.dispatch(decrement(amount));
//   }
//   reset() {
//     store.dispatch(reset());
//   }
//
//   render() {
//     const count = store.getState().count;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>{count}</h1>
//           <div className="button-container">
//             <button className="btn-primary" onClick={this.increment}>
//               {" "}
//               <b>+</b>{" "}
//             </button>
//             <button className="btn-danger" onClick={this.decrement}>
//               {" "}
//               <b>-</b>{" "}
//             </button>
//             <button onClick={this.reset}> Reset</button>
//             <input type="text" value="amount" defaultValue="1" />
//           </div>
//         </header>
//       </div>
//     );
//   }
// }
