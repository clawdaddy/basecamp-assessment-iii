import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render(){
    return (
      <h1>HELLO</h1>
    )
  }
}
class Button extends Component{
  render(){
    return (
      <button>CLICK</button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Button/>
      </div>
    );
  }
}

export default App;
