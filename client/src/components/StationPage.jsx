import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";

class StationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { station } = this.props.station;
    console.log("STATIONPAGE station", station);
    return (
      <>
        <h1>{station.name}</h1>
        <button
          className="station-button"
          onClick={() =>
            this.props.history.push(`/station/${station.index}/new-comment`)
          }
        >
          Comment
        </button>
        <button
          className="station-button"
          onClick={() =>
            this.props.history.push(`/station/${station.index}/favorite`)
          }
        >
          Favorite
        </button>
      </>
    );
  }
}
export default withRouter(StationPage);
