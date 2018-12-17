import React, { Component } from 'react';
import NewsBlog from './containers/NewsBlog'
import './App.css';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div>
      <NewsBlog/>
     </div>
     </BrowserRouter>
    );
  }
}

export default App;
 