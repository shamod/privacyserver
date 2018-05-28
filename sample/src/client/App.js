import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/getUsername');
      const { username } = res.data;
      this.setState({ username });
    } catch (error) {
      this.setState({ error: error.message });
      console.error(error.message);
    }
  }

  render() {
    return (
      <div>
        {this.state.username ? (
          <h1>Hello {this.state.username}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        {this.state.error && <h1>Error: {this.state.error}</h1>}
      </div>
    );
  }
}
