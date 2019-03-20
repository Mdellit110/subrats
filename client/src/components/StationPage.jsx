import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { fetchStationData } from "../services/users-helpers";
import CommentList from "./CommentList";
import Chart from "./Chart";

class StationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationData: [],
      chartData: []
    };
    this.compileChartData = this.compileChartData.bind(this);
    this.fetchStationData = this.fetchStationData.bind(this);
    this.createStationId = this.createStationId.bind(this);
  }

  createStationId() {
    // console.log(this.props.location.pathname.split("/")[2]);
    // console.log(this.props.currentStation);
    const path = this.props.location.pathname.split("/")[2];
    return this.props.match.params.id || path || "188";
  }
  async fetchStationData() {
    const station_id = this.createStationId();
    console.log("this is station_id", station_id);
    const stationData = await fetchStationData(station_id);
    this.setState((prevState, newState) => ({
      stationData: stationData
    }));
    console.log("this is stationData", this.state.stationData);
    // if (this.state.stationData.length) {
    //   this.compileChartData();
    // }
  }

  compileChartData() {
    const chartData = this.state.stationData.map((data, el) => [
      //   data.label,
      //   data.average
    ]);
    this.setState((prevState, newState) => ({
      chartData: chartData
    }));
    console.log("chartData", chartData);
  }

  async componentDidMount() {
    await this.fetchStationData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      console.log("FETCHING STATION DATA!", this.props.stationData);
      this.fetchStationData();
    }
  }
  render() {
    const { currentStation } = this.props;
    console.log("STATIONPAGE stationData", this.state.stationData);
    console.log("STATIONPAGE props.params", this.props.match.params);
    return (
      <>
        <h1>This is station name:{this.state.stationData.name}</h1>
        <h2>{currentStation.lines}</h2>
        <button
          className="station-button"
          onClick={() =>
            this.props.history.push(
              `/station/${this.props.match.params}/new-comment`
            )
          }
        >
          Comment
        </button>
        <button className="station-button">Favorite</button>
        <h2>Average Activity</h2>
        <h2>Average Cleanliness</h2>
        <h2>Average Timeliness</h2>
        <Chart
          yAxis={"Busy"}
          chartData={this.state.chartData}
          stationId={this.props.match.params}
        />
        {/* <div className="chart-container">{lineChart}</div> */}
        <CommentList commentData={this.stationData.comments} />
      </>
    );
  }
}
export default withRouter(StationPage);
