import React from 'react';

class Parks extends React.Component {
  render(){
    return(
    <section>
      <h3>Results from the National Parks Service</h3>
      <ul class="parks-results">
        {this.props.parks && this.props.parks.map((park, idx) => (
            <li key={idx}>
              <p>Park Name: <a href={ park.park_url }>{ park.name }</a>, Location: { park.address }</p>
              <p>The free to enter the park is { park.fee }</p>
              <p>{ park.description }</p>
            </li>
        ))}
      </ul>
    </section>
    )
  }
}

export default Parks;