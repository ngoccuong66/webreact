import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Carousel from './component/Carousel'
import Nav from './component/Nav/index';
import { Router, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Nav />
          </BrowserRouter>

    </div>
  );
}

export default App;
