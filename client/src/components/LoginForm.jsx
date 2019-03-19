import React from "react";

export default props => {
  const { show, email, password, onChange, onSubmit } = props;
  return (
    !show && (
      <div className="user-form-container">
        <form>
          <h2>Login</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={onChange}
              name="email"
              id="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              id="password"
              value={password}
            />
          </div>
          <button type="submit" onClick={onSubmit}>
            Sign In
          </button>
          <button
            type="submit"
            onClick={() => this.props.history.push(`/register`)}
          >
            Register
          </button>
        </form>
      </div>
    )
  );
};
