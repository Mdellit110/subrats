import React from "react";

export default props => {
  const { userName, email, password, handleChange, handleSubmit } = props;
  return (
    <>
      <h2>Register Form</h2>
      <form>
        <label htmlFor="email">Email </label>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          id="email"
          value={email}
        />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="userName"
          id="userName"
          value={userName}
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
          Register
        </button>
      </form>
    </>
  );
};
