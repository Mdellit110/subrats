import React from "react";

export default props => {
  const { show, email, password, onChange, onSubmit } = props;
  return (
    show && (
      <>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            onChange={onChange}
            name="email"
            id="email"
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={onChange}
            name="password"
            id="password"
            value={password}
          />
          <button type="submit" onClick={onSubmit}>
            Sign In
          </button>
        </form>
      </>
    )
  );
};
