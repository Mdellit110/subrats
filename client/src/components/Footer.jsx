import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div className="footer">
    <Link to="/contact">contact</Link>
    <Link to="/logout">logout</Link>
    <a href="https://github.com/Mdellit110/subrats">github</a>
  </div>
);
