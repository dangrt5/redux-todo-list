import React, { Component } from 'react';
import {Route} from "react-router-dom";
import List from "./list";
import AddItem from "./add_item";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add" component={AddItem}/>
      </div>
    );
  }
}

export default App;
