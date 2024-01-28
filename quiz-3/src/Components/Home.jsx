import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>Quiz App</h3>
        <Link to="/quiz">
          <button id="playBtn">Play</button>
        </Link>
      </div>
    );
  }
}

export default Home;
