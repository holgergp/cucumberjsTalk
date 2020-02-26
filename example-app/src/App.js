import React, { Component } from "react";
import "./styles/App.scss";
import { Provider } from "react-redux";
import { Bohnen } from "./Bohnen";

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <Bohnen />
        </div>
      </Provider>
    );
  }
}

export default App;
