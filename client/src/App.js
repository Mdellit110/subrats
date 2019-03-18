import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import StationPage from "./components/StationList";
import CommentForm from "./components/CommentForm";
import UserProfile from "./components/UserProfile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// jwt-decode lets us decode json web token and access the data in them
import decode from "jwt-decode";
import { createNewUser, loginFormData } from "./services/users-helpers";
import fetchStations from "./services/stations-helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFormData: {
        userName: "",
        email: "",
        password: ""
      },
      currentUser: null,
      loginFormData: {
        email: "",
        password: ""
      },
      userData: {},
      stationList: {},
      userInput: "",
      autocompleteOptions: [],
      activeOption: 0,
      filteredOptions: [],
      showOptions: false
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleQueryKeyDown = this.handleQueryKeyDown.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleQueryChange = e => {
    const { autocompleteOptions } = this.state;
    const userInput = e.currentTarget.value;
    console.log("this is userInput", userInput);
    const filteredOptions = autocompleteOptions.filter(
      option => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    console.log("this is handleQueryChange: filteredOptions", filteredOptions);
    this.setState({
      activeOption: 0,
      filteredOptions: filteredOptions,
      showOptions: true,
      userInput: userInput
    });
  };

  handleQueryClick(e) {
    e.preventDefault();
    console.log(
      "this is handlequeryclick: e.currentTarget.innerText",
      e.currentTarget.innerText
    );
    const userInput = e.currentTarget.innerText;
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: userInput
    });
  }

  handleQueryKeyDown = e => {
    const { activeOption, filteredOptions } = this.state;
    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption - 1 === filteredOptions.length) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  handleQuerySubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("target", name);
    this.setState((prevState, newState) => ({
      [name]: value
    }));
  }

  async handleLogin() {
    const userData = await loginUser(this.state.loginFormData);
    this.setState({
      currentUser: userData.user,
      userData: userData
    });
    localStorage.setItem("jwt", userData.token);
  }

  async handleRegister(e) {
    e.preventDefault();
    const userData = await createNewUser(this.state.registerFormData);
    this.setState({
      currentUser: userData.user,
      userData: userData
    });
    localStorage.setItem("jwt", userData.token);
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    });
  }

  async componentDidMount() {
    await this.fetchStations;
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      });
    }
  }

  render() {
    return (
      <div className="Main-app-body">
        <h1>Subway Rats</h1>
        <Header />
        <Footer handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <>
              <RegisterForm
                show={this.state.currentUser}
                onChange={this.newUserHandleChange}
                onSubmit={this.newUserHandleSubmit}
                user={this.state.userFormData.user}
                email={this.state.userFormData.email}
                password={this.state.userFormData.password}
              />
              <LoginForm
                show={this.state.currentUser}
                onChange={this.userHandleChange}
                onSubmit={this.userHandleSubmit}
                user={this.state.userFormData.user}
                email={this.state.userFormData.email}
                password={this.state.userFormData.password}
              />
            </>
          )}
        />
        <Route exact path="/home" render={() => <Home />} />
        <Route
          exact
          path="/search"
          render={props => (
            <SearchPage
              {...props}
              onKeyDown={this.handleQueryKeyDown}
              onFormChange={this.handleQueryChange}
              onClick={this.handleQueryClick}
              onSubmit={this.state.handleQuerySubmit}
              showOptions={this.state.showOptions}
              userInput={this.state.userInput}
              filteredOptions={this.state.filteredOptions}
            />
          )}
        />
        <Route exact path="/station/:id" render={() => <StationPage />} />
        <Route exact path="/user/:id" render={() => <UserProfile />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/station/:id/new-comment"
          render={() => <CommentForm />}
        />
      </div>
    );
  }
}

export default withRouter(App);
