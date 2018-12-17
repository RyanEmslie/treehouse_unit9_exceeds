import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

import axios from "axios";

import apiKey from "./config.js";

import Search from "./components/Search";
import Nav from "./components/Nav";
// import Results from './components/Results';
// import NoResults from './components/NoResults';
import ResultsList from "./components/ResultsList";

import Trees from "./components/Trees";
import Carson from "./components/Carson";




class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      trees: [],
      carson: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
    this.treeSearch();
    this.carsonSearch();
  }

  performSearch = (query = "alligator") => {
    // const tags = 'people'
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${query}&extras=url_s`;
    axios
      .get(url)
      .then(response => {
        this.setState({
          results: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };


  treeSearch = () => {
    // const tags = 'people'
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=forest&extras=url_s`;
    axios
      .get(url)
      .then(response => {
        this.setState({
          trees: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  carsonSearch = () => {
    // const tags = 'people'
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=ryan+carson&extras=url_s`;
    axios
      .get(url)
      .then(response => {
        this.setState({
          carson: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };




  render() {
    return (
  //     <div>
  //       <div className="container">
  //         <Search onSearch={this.performSearch} />
  //         <Nav />
  //         <div>
  //           {this.state.loading ? <p>Looking....</p>:<ResultsList data={this.state.results} />}
  //         </div>
  //       </div>
  //     </div>


    <BrowserRouter>
      <div className="container">
        <Search onSearch={this.performSearch} />
        <Nav />
        
        <div>
         {this.state.loading ? <p>Looking....</p>:<ResultsList data={this.state.results} />}
        </div>
        <Trees data={this.state.trees} />
        <Carson data={this.state.carson} />
      </div>
    </BrowserRouter>

    );
  }

  
}


export default App;
