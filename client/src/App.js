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
import {
  createNewUser,
  loginUser,
  fetchStations
} from "./services/users-helpers";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFormData: {
        username: "",
        email: "",
        password: ""
      },
      currentUser: null,
      toggleLogin: true,
      loginFormData: {
        email: "",
        password: ""
      },
      userData: {},
      stationData: {},
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
    this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
    this.handleRegisterFormChange = this.handleRegisterFormChange.bind(this);
    this.getAllStations = this.getAllStations.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
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
      currentUser: userData.data.user,
      userData: userData.data,
      loginFormData: {
        email: "",
        password: ""
      }
    });
    localStorage.setItem("jwt", userData.data.token);
    this.props.history.push(`/home`);
  }

  handleLoginClick() {
    console.log("I want to register: handleLoginClick button".toggleLogin);
    this.setState((prevState, newState) => ({
      toggleLogin: !prevState.toggleLogin
    }));
  }

  async handleRegister(e) {
    e.preventDefault();
    const userData = await createNewUser(this.state.registerFormData);
    this.setState({
      currentUser: userData.data.user,
      userData: userData.data,
      registerFormData: {
        username: "",
        email: "",
        password: ""
      }
    });
    localStorage.setItem("jwt", userData.data.token);
    this.props.history.push(`/home`);
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null,
      toggleLogin: true
    });
  }

  handleLoginFormChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value
      }
    }));
  }
  handleRegisterFormChange(e) {
    const { name, value } = e.target;
    console.log("handleRegisterChange name, val", name, value);
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }
  async getAllStations() {
    const stationData = await fetchStations();
    const autocompleteOptions = stationData.map(station => station.name);
    this.setState((prevState, newState) => ({
      stationData: stationData,
      autocompleteOptions: autocompleteOptions
    }));
  }

  async componentDidMount() {
    await this.getAllStations;
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
        <div className="header-container">
          <h1 className="main-title">Subway Rats</h1>
          <Header />
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <LoginForm
                show={this.state.currentUser}
                toggle={this.state.toggleLogin}
                onChange={this.handleLoginFormChange}
                onSubmit={this.handleLogin}
                email={this.state.loginFormData.email}
                password={this.state.loginFormData.password}
                onClick={this.handleLoginClick}
              />
              <RegisterForm
                onClick={this.handleLoginClick}
                show={this.state.currentUser}
                toggle={this.state.toggleLogin}
                onChange={this.handleRegisterFormChange}
                onSubmit={this.handleRegister}
                user={this.state.userData.username}
                email={this.state.userData.email}
                password={this.state.userData.password}
              />
            </>
          )}
        />
        <Route
          exact
          path="/home"
          render={() => (
            <Home show={this.state.currentUser} userData={this.userData} />
          )}
        />
        <Route
          exact
          path="/search"
          render={props => (
            <SearchPage
              {...props}
              userData={this.state.userData}
              onKeyDown={this.handleQueryKeyDown}
              onFormChange={this.handleQueryChange}
              onClick={this.handleQueryClick}
              onSubmit={this.state.handleQuerySubmit}
              showOptions={this.state.showOptions}
              userInput={this.state.userInput}
              filteredOptions={this.state.filteredOptions}
              activeOptions={this.state.activeOption}
            />
          )}
        />
        <Route exact path="/station/:id" render={() => <StationPage />} />
        <Route
          exact
          path="/user/:id"
          render={() => <UserProfile userData={this.userData} />}
        />
        <Route
          exact
          path="/user/:id/edit"
          render={() => (
            <RegisterForm
              onChange={this.editFormChange}
              onSubmit={this.handleEdit}
              user={this.state.userData.username}
              email={this.state.userData.email}
              password={this.state.userData.password}
            />
          )}
        />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/station/:id/new-comment"
          render={() => <CommentForm userData={this.userData} />}
        />
        <Footer handleLogout={this.handleLogout} />
      </div>
    );
  }
}

export default withRouter(App);
