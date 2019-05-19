import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.count}</h1>
          <div className="button-container">
            <button className="btn-primary" onClick={this.increment}> <b>+</b> </button>
            <button className="btn-danger" onClick={this.decrement}> <b>-</b> </button>
            {/*<button onClick={() => this.changeCount()}> Reset</button>*/}
          </div>
        </header>
      </div>
    );
  }
}
