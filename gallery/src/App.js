import React, { Component } from 'react';
import './index.css';

import axios from 'axios';

import apiKey from './config.js'


import Search from './components/Search';
import Nav from './components/Nav';
// import Results from './components/Results';
// import NoResults from './components/NoResults';
import ResultsList from './components/ResultsList'





class App extends Component {
  
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount() {
  
  
  }
  
  performSearch = (query) => {
    // const tags = 'people'
    const url = (`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${query}&extras=url_s`)
    axios.get(url)
    .then(response => {
      this.setState({
        results: response.data.photos.photo
      });
  
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });


  }
 

  render() {
    return (
      <div>
        <div className="container">
          <Search onSearch={this.performSearch}/>
          <Nav />
          <ResultsList data={this.state.results}/>
          {/* <NoResults /> */}
        </div>
      </div>
    );
  }
}




export default App;
