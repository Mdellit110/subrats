import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div className="header">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user">Profile</Link>
      <Link to="/search">Search</Link>
    </nav>
  </div>
);
