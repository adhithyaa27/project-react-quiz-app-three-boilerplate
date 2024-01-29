import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>QUIZ APP</h3>
        
        <Link to="/quiz">
          <button id="playBtn">PLAY</button>
        </Link>
      </div>
    );
  }
}

export default Home;
