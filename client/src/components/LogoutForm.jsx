import React from "react";

export default props => {
  // extract props here to avoid repetitious typing
  return (
    <>
      <h2>Logout</h2>
      <form>
        <button type="submit" onClick={props.handleLogout}>
          Log Out
        </button>
        <button type="submit" onClick={() => this.props.history.push(`/home`)}>
          Cancel
        </button>
      </form>
    </>
  );
};
