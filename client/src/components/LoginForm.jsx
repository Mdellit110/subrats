import React from "react";

export default props => {
  const { show, email, password, handleChange, handleSubmit } = props;
  return (
    show && (
      <>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            id="email"
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            value={password}
          />
          <button type="submit" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </>
    )
  );
};
