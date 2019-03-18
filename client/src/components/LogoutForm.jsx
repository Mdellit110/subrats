import React from "react";

export default props => {
  // extract props here to avoid repetitious typing
  const { show, email, password, handleChange, handleSubmit } = props;
  return (
    show && (
      <>
        <h2>Logout</h2>
        <form>
          <button type="submit" onClick={handleLogout}>
            LogOut
          </button>
          <button type="submit" onClick={handleSubmit}>
            Cancel
          </button>
        </form>
      </>
    )
  );
};
