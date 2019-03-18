import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div>
    <h2>Contact the OG Rats</h2>
    <form>
      <label htmlFor="contactEmail">email</label>
      <input
        type="email"
        name="contactEmail"
        value={contactEmail}
        id="contactEmail"
        onChange={handleChange}
      />
      <label htmlFor="contactMessage">
        Reach out with comments and concern
      </label>
      <input
        type="text"
        name="contactMessage"
        value={contactMessage}
        id="contactMessage"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        Send
      </button>
    </form>
  </div>
);
