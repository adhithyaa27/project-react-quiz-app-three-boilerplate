import React, { Component } from "react";
import './Quiz.css';
import { Link } from "react-router-dom";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qno: 0,
            score: 0,
            attempted: 0
        };
    }

    handleOptionClick = (selectedOption) => {
        const { questions } = this.props;
        const { qno } = this.state;
        const { score } = this.state
        const {attempted} = this.state

        // Check if the selected option is the correct answer
        if (selectedOption === questions[qno].answer) {
            
            alert("Correct!");
            
            // Increment the score if the answer is correct
            this.setState((prevState) => ({ score: prevState.score + 1 }));
            console.log(score)
        } else {
            alert("Wrong answer!");
        }
        this.next()
        this.setState((prevState) => ({attempted: prevState.attempted + 1}))
        console.log(attempted)
    };

    next = () => {
        const qno = this.state.qno + 1;
        if (qno < 15) {
            this.setState({ qno: qno });
        }
    }

    previous = () => {
        const qno = this.state.qno - 1;
        if (qno >= 0) {
            this.setState({ qno: qno });
        }
    }

    quit = () => {
        const confirmQuit = window.confirm('Are you sure you want to quit?');
        if (confirmQuit) {
            // Handle quitting logic, for now, it just displays a message
            alert('You quit the quiz.');
        }
    }

    render() {
        const { qno , score , attempted } = this.state;
        const { questions } = this.props;

        return (
            <div className="quiz">
                <h1>Question</h1>
                <p id="questionNumber">{qno + 1} of 15</p>
                <h4 id="question">{questions[qno].question}</h4>
                <div id="Optionbuttons">
                    <button onClick={() => this.handleOptionClick(questions[qno].optionA)}>
                        {questions[qno].optionA}
                    </button>
                    <button onClick={() => this.handleOptionClick(questions[qno].optionB)}>
                        {questions[qno].optionB}
                    </button>
                    <button onClick={() => this.handleOptionClick(questions[qno].optionC)}>
                        {questions[qno].optionC}
                    </button>
                    <button onClick={() => this.handleOptionClick(questions[qno].optionD)}>
                        {questions[qno].optionD}
                    </button>
                </div>
                <div id='navigation'>
                    <button id='prevBtn' onClick={this.previous}>Previous</button>
                    <button id='nextBtn' onClick={this.next}>Next</button>
                    <button id='quitBtn' onClick={this.quit}>Quit</button>
                    <Link to={`/result/${score}/${attempted}`}>
                        <button id='finishBtn'>Finish</button>
                    </Link>

                </div>
            </div>
        );
    }
}

export default Quiz;
