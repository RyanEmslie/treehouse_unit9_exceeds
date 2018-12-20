import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import axios from "axios";
import apiKey from "./config.js";

// App components
import Header from "./components/Header";
import Search from "./components/Search";
import Nav from "./components/Nav";
import ResultsList from "./components/ResultsList";
import Home from "./components/Home";
import NSFW from "./components/NSFW";
import NoMatch from "./components/NoMatch";




class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      trees: [],
      carson: [],
      houses: [],
      query: '',
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
    this.treeSearch();
    this.carsonSearch();
    this.housesSearch();
  }

  performSearch = (query = 'Alligators') => {
    this.setState({query: query})
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

  housesSearch = () => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=houses&extras=url_s`;
    axios
      .get(url)
      .then(response => {
        this.setState({
          houses: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search onSearch={this.performSearch} />
          <Nav />

          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/results" render={ () => <ResultsList data={this.state.results} queryTitle={this.state.query} />} />
            <Route exact path="/trees" render={ () => <ResultsList data={this.state.trees} title={'of Trees'} />} />
            <Route exact path="/houses" render={ () => <ResultsList data={this.state.houses} title={'of Houses'}/>} />
            <Route exact path="/carson" render={ () => <ResultsList data={this.state.carson} title={'of Ryan Carson'}/>} />
            <Route exact path="/nsfw" component={NSFW} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
} //class App

export default App;


