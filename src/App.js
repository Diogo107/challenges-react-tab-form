import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Form from './Components/Form';
import Carousel from './Components/Left';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section className="home">
        <div className="carousel">
          <Carousel />
        </div>
        <div className="form">
          <Form />
        </div>
      </section>
    </div>
  );
}

export default App;
