import React from 'react';

class Map extends React.Component {
  render() {
    return(
      <div id="map">
        {this.props.locationObj && 
        <img src={this.props.locationObj.map || ''} />
        }
      </div>
    )
  }
}

export default Map;