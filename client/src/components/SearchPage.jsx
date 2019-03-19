import React from "react";
import QueryBar from "./QueryBar";
import StationList from "./StationList";
import { withRouter } from "react-router-dom";

const SearchPage = props => {
  const {
    onChange,
    onClick,
    onKeyDown,
    activeOption,
    filteredOptions,
    showOptions,
    userInput,
    onSubmit,
    userData
  } = props;
  return (
    <div className="search-page-container">
      <QueryBar
        {...props}
        onKeyDown={onKeyDown}
        onFormChange={onChange}
        onClick={onClick}
        onSubmit={onSubmit}
        showOptions={showOptions}
        userInput={userInput}
        filteredOptions={filteredOptions}
        activeOption={activeOption}
      />
      <StationList stationList={userData.station_id} />
    </div>
  );
};
export default withRouter(SearchPage);
