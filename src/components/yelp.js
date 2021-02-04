import React from 'react';

class Yelp extends React.Component {
  render(){
    return(
      <section class="yelp-container">
        <h3>Results from the Yelp API</h3>
        <ul class="yelp-results">
          {this.props.yelp && this.props.yelp.map((restaurant, idx) => (
            <li key={idx}>
              <a href={restaurant.url}>{restaurant.name}</a>
              <p>The average rating is {restaurant.rating} out of 5 and the average cost is {restaurant.price} out of 4</p>
              <img src={restaurant.image_url} />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Yelp;