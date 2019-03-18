import React from "react";

export default props => {
  const { userName, email, password, onChange, onSubmit } = props;
  return (
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
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          onChange={onChange}
          name="userName"
          id="userName"
          value={userName}
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
          Register
        </button>
      </form>
    </>
  );
};
