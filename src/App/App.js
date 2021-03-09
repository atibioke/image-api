import React from 'react';
import './App.css';
import Home from '../Home/Home.js'
import { Route, Switch } from "react-router-dom";
import CarDisplay from '../CarDisplay/CarDisplay'





class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/car/:id" component={CarDisplay} />
        </Switch>
      </div>
    )
  }

};

export default App;
