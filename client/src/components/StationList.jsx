import React from "react";
import { withRouter } from "react-router-dom";

const StationList = props => {
  const { stationList } = props;
  console.log("STATIONLIST : stationList:", stationList);
  return (
    <div className="stock-list">
      {stationList &&
        stationList.map((station, index) => (
          <div className="station-container">
            <div className="station-information">{station.name}</div>
            <div className="station-buttons-container">
              <button
                className="station-button"
                onClick={() => props.history.push(`/station/${station.index}`)}
              >
                View Station
              </button>
              <button
                className="station-button"
                onClick={() =>
                  props.history.push(`/station/${station.index}/new-comment`)
                }
              >
                Comment
              </button>
              <button
                className="station-button"
                onClick={() =>
                  props.history.push(`/station/${station.index}/favorite`)
                }
              >
                Favorite
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default withRouter(StationList);
