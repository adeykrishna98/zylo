import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Tasks from "./container/Tasks/Tasks";




class App extends Component {
  render() {
    let route = (
      <Switch>
        <Route
          exact
          path="/"
          component={Tasks} />

      </Switch>
    );
    return (
      <div className="App">
        {route}
      </div>
    );
  }
}

export default App;
