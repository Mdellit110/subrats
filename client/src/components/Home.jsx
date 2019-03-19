import React, { Component } from "react";
import StationList from "./StationList";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeStations: []
    };
  }
  createCloseStations() {
    const { user, stationList } = this.props;
  }
  //   initMap() {
  //     map = new google.maps.Map(document.getElementById("map"), {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8
  //     });
  //   }
  componentDidMount() {
    this.createCloseStations();
  }
  render() {
    const { user, show } = this.props;
    return (
      show && (
        <div className="home-container">
          <div className="map-container">
            <h1>HOME</h1>
            {/* <h3>My Google Maps Demo</h3>
            <div id="map" />{map}</div>
            <script
              async
              defer
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap"
            /> */}
          </div>
          <StationList stations={this.state.closeStations} />
        </div>
      )
    );
  }
}
export default Home;
