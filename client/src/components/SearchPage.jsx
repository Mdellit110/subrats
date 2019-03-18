import React from "react";
import QueryBar from "./QueryBar";
import StationList from "./StationList";
import { withRouter } from "react-router-dom";

const SearchPage = props => {
  return (
    <div className="search-page-container">
      <QueryBar />
      <StationList />
    </div>
  );
};
export default withRouter(SearchPage);
