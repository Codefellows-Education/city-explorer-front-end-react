import React from 'react';

class Movies extends React.Component {
  render(){
    return(
      <section class="movie-container">
        <h3>Results from The Movie DB API</h3>
        <ul class="movies-results">
          {this.props.movies && this.props.movies.map((movie, idx) => (
            <li key={idx}>
              <img src={movie.image_url} />
              <span>{movie.title}</span>
              <span>{movie.released_on}</span>
              <span>{movie.overview}</span>
              <span>{movie.average_votes}</span>
              <span>{movie.popularity}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Movies;