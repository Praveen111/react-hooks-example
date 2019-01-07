import React, { Component } from 'react';
import BookBuilder from './Containers/BookBuilder/BookBuilder';
import './App.css';
import Cart from './Components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Hello Praveen!!!</h2>
      
      <Cart />
      <BookBuilder />
      </div>
    );
  }
}

export default App;
