import React, { Component } from 'react';

// import './index.css';
// import './App.css';
import Search from './components/Search';
import Nav from './components/Nav';
import Results from './components/Results';
import NoResults from './components/NoResults';


class App extends Component {
  render() {
    return (
      <div className="container">
      <Search />
      <Nav />
      <Results />
      <NoResults />
      </div>
    );
  }
}




export default App;
