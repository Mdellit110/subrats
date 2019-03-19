import React from "react";

export default props => {
  const {
    show,
    toggle,
    username,
    email,
    password,
    onChange,
    onSubmit,
    onClick
  } = props;
  const showRegister = !show && !toggle;
  return (
    showRegister && (
      <>
        <h2>Register Form</h2>
        <form>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            onChange={onChange}
            name="email"
            id="email"
            value={email}
          />
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            onChange={onChange}
            name="username"
            id="username"
            value={username}
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
            Submit
          </button>
          <button type="submit" onClick={onClick}>
            Back to Login
          </button>
        </form>
      </>
    )
  );
};
