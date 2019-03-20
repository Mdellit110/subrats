import ReactChartkick, { LineChart } from "react-chartkick";
import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";

const LineChart = props => {
  const lineChart = (
    <div>
      <LineChart
        data={props.chartData}
        title={props.stationId}
        min={null}
        max={null}
        width={"800px"}
        height={"400px"}
        hAxis={"Time"}
        vAxis={props.yAxis}
      />
    </div>
  );
  return <div>comst</div>;
};
export default withRouter(LineChart);
