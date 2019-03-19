import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class StationMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const { lat, lng } = this.props.currentLocation
    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        initialCenter={{ lat, lng }}
        zoom={16}>
        {this.props.stationData.map(station => {
          const {geolocation} = station;
          const step1 = geolocation.replace('POINT (', '');
          const step2 = step1.replace(')', '');
          const step3 = step2.split(' ');
          const lng = step3[0];
          const lat = step3[1];

          return(
            <Marker
              onClick={this.onMarkerClick}
              name={station.name+" "+station.lines}
              position={{ lat, lng }} />
          )
        })}
        <Marker
          onClick={this.onMarkerClick}
          name={'Your Here!'}
          position={{ lat, lng }} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.APIKEY
})(StationMap)
