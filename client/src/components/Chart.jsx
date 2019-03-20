import ReactChartkick, { LineChart } from "react-chartkick";
import React, { Component } from "react";

const Chart = props => {
  const chart = (
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
  return props.chartData && <div className="chart-container">{chart}</div>;
};
export default Chart;
