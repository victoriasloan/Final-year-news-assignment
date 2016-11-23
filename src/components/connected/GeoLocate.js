import React from 'react';
import {geolocated} from 'react-geolocated';



class Geo extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ?
          <img src={'https://maps.googleapis.com/maps/api/staticmap?center=' + this.props.coords.latitude  + "," + this.props.coords.longitude + '&zoom=13&size=300x300&sensor=false'}/>
          : <div>Getting the location data&hellip; </div>;
      }
 }

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Geo);
