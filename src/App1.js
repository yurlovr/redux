import React, { Component } from "react";
import { createStore } from "redux";

const initialState = { value: "" };

function reducer(state, action) {
  return action.type === "INPUT_CHANGE" ? { value: action.value } : state;
}

function changeInputValue(value) {
  return { type: "INPUT_CHANGE", value };
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App1 extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const value = store.getState().value;
    console.log(value);
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
  handleChange = e => {
    store.dispatch(changeInputValue(e.target.value));
  };
}
