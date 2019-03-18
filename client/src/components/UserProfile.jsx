import React from "react";
import { withRouter } from "react-router-dom";

const UserProfile = props => {
  const { userData } = props;
  console.log("USERPROFILE : userData:", userData);
  console.log("USERPROFILE : props.match.params:", props.match.params);
  return (
    <div className="user-profile">
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      <p>favorite stations</p>
      <StationList stations={userData.favoriteStations} />
      <button
        className="station-button"
        onClick={() =>
          this.props.history.push(`/user/${props.match.params}/edit/`)
        }
      >
        Edit User
      </button>
    </div>
  );
};
export default withRouter(UserProfile);
