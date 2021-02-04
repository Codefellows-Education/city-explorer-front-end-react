import React from 'react';

class Weather extends React.Component {
  render(){
    return(
      <section id="weather">
        <h3>Results from the Open Weather API</h3>
        <ul class="weather-results">
          {this.props.weather && this.props.weather.map((day, idx) => (
            <li key={idx}>
              The forecast for { day.time } is: { day.forecast }
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Weather;