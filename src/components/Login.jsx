import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  dismissError = () => {
    this.setState({ error: "" });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("JwtToken", data.token);
      })
      .catch(console.log);
  };

  handleUserChange = evt => {
    this.setState({
      username: evt.target.value
    });
    console.log(this.state.username);
  };

  handlePassChange = evt => {
    this.setState({
      password: evt.target.value
    });
    console.log(this.state.password);
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <label>User Name</label>
          <input
            type="text"
            data-test="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />

          <label>Password</label>
          <input
            type="password"
            data-test="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
