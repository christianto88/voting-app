import React, { Component } from "react";
import "./App.css";
import MainContainer from "./container/MainContainer";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
// pick utils
import MomentUtils from "@date-io/moment";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MainContainer />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default App;
