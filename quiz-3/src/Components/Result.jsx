
import "./Result.css"
import React from "react";
import { Link, useParams } from "react-router-dom";

class Result extends React.Component {
  render() {
    return (
      <div className="resultContainer">
        <h1 className="title">RESULT</h1>
        <div id="result"><ResultContent /></div>
        
        <Link to="/quiz">
          <button id="Again">PLAY AGAIN </button>
        </Link>
        <Link to="/">
          <button id="HOME">BACK TO HOME</button>
        </Link>
      </div>
    );
  }
}

// Create a separate function component to use the useParams hook
const ResultContent = () => {
  const { score, attempted } = useParams();

  return (<>
                <h4>You need more practice !</h4>
                    <h1>Your score is {score}</h1>
                    <div id="resultDescription">
                        <div id="flex">
                            <p>Total number of questions</p>
                            <p>15</p>
                        </div>
                        <div id="flex">
                            <p>Number of attempted questions</p>
                            <p>{attempted}</p>
                        </div>
                        <div id="flex">
                            <p>Number of correct answers</p>
                            <p>{score}</p>
                        </div>
                        <div id="flex">
                            <p>Number of wrong answers</p>
                            <p>{attempted-score}</p>
                        </div>
                    </div>

        </>
  );
};

export default Result;
