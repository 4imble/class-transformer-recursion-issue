import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { plainToInstance } from 'class-transformer';
import Base from './domain/base';
import Container from './domain/container';

function App() {
  useEffect(() => {
    const mapItems = () => {
      let json = "{id:1, type:'container' children: [{id: 2, type:'item'},{id: 3 'type:'container', children:[]}]";
      let containers = plainToInstance(Container, json);
      debugger;
    }
    mapItems();
  });

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
