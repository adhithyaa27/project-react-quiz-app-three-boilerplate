import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import questions from '../resources/quizQuestion.json'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz questions={questions} />} />
        <Route path="/result/:score/:attempted" element={<Result />} />

      </Routes>
    </Router>
  );
}

export default App;
