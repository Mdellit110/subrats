import React from "react";
import ratAvatars from "../ratAvatars";

export default props => {
  const {
    show,
    toggle,
    username,
    email,
    password,
    onChange,
    onSubmit,
    onClick,
    submitButtonText,
    backButtonText,
    avatar,
    toggleLocal,
    isLocal,
    title,
    userData
  } = props;
  function renderImage(imgurl) {
    return (
      <div>
        <img src={imgurl} />
      </div>
    );
  }
  const showRegister = !show && !toggle;
  console.log("register user form props", userData);
  return (
    showRegister && (
      <div className="user-form-container">
        <h2>{title}</h2>
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
            value={userData ? userData.user : username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={onChange}
            name="password"
            id="password"
            value={password}
          />
          <label htmlFor="isLocal">
            Do you consider yourself a local?
            <input
              type="checkbox"
              name="isLocal"
              value="true"
              onChange={onChange}
              onClick={toggleLocal}
            />
          </label>
          <label htmlFor="avatar">
            Choose your rat:
            {ratAvatars &&
              ratAvatars.map((el, i) => (
                <input
                  className={`avatar-${el.id}`}
                  name="avatar"
                  key={el.id}
                  value={el.id}
                  onChange={onChange}
                  onClick={onChange}
                />
              ))}
          </label>
          <button type="submit" onClick={onSubmit}>
            {submitButtonText}
          </button>
          <button type="submit" onClick={onClick}>
            {backButtonText}
          </button>
        </form>
      </div>
    )
  );
};
