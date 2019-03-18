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
  render() {
    const { user } = this.props;
    return (
      <div className="home-container">
        IMPORT MAP HERE STATIONS near you
        <StationList stations={this.state.closeStations} />
      </div>
    );
  }
}
export default Home;
