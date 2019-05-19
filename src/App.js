import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {}

  changeCount = action => {
    switch (action) {
      case "add":
        this.setState({ count: this.state.count + 1 });
        return;
      case "dell":
        this.setState({ count: this.state.count - 1 });
        return;
      default:
        this.setState({ count: 0 });
        return;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.count}</h1>
          <button onClick={() => this.changeCount("add")}> plus</button>
          <button onClick={() => this.changeCount("dell")}> MINUS</button>
          <button onClick={() => this.changeCount()}> Reset</button>
        </header>
      </div>
    );
  }
}
