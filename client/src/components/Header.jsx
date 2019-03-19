import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { show } = props;
  return (
    show && (
      <div className="header">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/user">Profile</Link>
          <Link to="/search">Search</Link>
        </nav>
      </div>
    )
  );
};
export default Header;
