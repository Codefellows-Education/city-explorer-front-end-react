import React from 'react';
import Map from './components/map.js';
import Weather from './components/weather.js';
import Yelp from './components/yelp.js';
import Movies from './components/movies.js';
import Parks from './components/parks.js';
import superagent from 'superagent';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      api: '' || 'http://localhost:3000',
      locationObj: {},
      weather: [],
      yelp: [],
      movies: [],
      parks: []
    }
  }

  handleLocationSearch = (e) => {
    e.preventDefault();
    superagent.get(`${this.state.api}/location`)
      .then(results => {
        this.setState({ locationObj: results.body });

        superagent.get(`${this.state.api}/weather`)
          .then(weatherResults => {
            this.setState({ weather: weatherResults.body });
          })
          
        superagent.get(`${this.state.api}/yelp`)
          .then(yelpResults => {
            this.setState({ yelp: yelpResults.body });
          })
        
        superagent.get(`${this.state.api}/movies`)
          .then(movieResults => {
            this.setState({ movies: movieResults.body });
          })
        
        superagent.get(`${this.state.api}/parks`)
          .then(parkResults => {
            this.setState({ parks: parkResults.body });
          })
      })
  }

  handleURLSubmit = (e) => {
    e.preventDefault();
    const api = e.target.url.value;
    this.setState({ api })
  }

  render(){
    return(
      <div id="main">
        <form onSubmit={this.handleURLSubmit} id="url-form">
          <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
          <input type="text" name="url" id="back-end-url"></input>
        </form>

        <form onSubmit={this.handleLocationSearch} id="search-form" class="hide">
          <label for="search">Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
          <button type="submit">Explore!</button>
        </form>

        <Map 
          locationObj={this.state.locationObj}
        />

        {/* Section for error message */}
        <section></section>

        <div class="column-container">
          <Weather weather={this.state.weather} />
          <Yelp yelp={this.state.yelp} />
          <Movies movies={this.state.movies} />
          <Parks parks={this.state.parks} />
        </div>

      </div>
    )
  }
}

export default Main;