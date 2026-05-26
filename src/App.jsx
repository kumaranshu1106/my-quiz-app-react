import React, { useState } from "react";
import { questions } from "./data/questions.js";
import AnswersList from "./component/AnswersList.jsx";

const App = () => {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedId, setSelectedId] = useState(() =>
    new Array(questions.length).fill(null),
  );

const question = questions[count];

  return (count < questions.length) ? (
    <div className="app-container">
      <div className="title-container">
        <div className="progress-container">
          {count + 1}/{questions.length}
        </div>
        <div className="statement-container">{question.statement}</div>
      </div>
      <AnswersList
        count={count}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        correct={correct}
        setCorrect={setCorrect}
        answers={question.answers}
      />
      <div className="footer">
        <button
          onClick={() => {
            // setSelectedId(null);
            setCount((prev) => {
              return prev === 0 ? 0 : prev - 1;
            });
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            // setSelectedId(null);
            setCount((prev) => {
              return prev + 1;
            });
          }}
        >
          next
        </button>
      </div>
    </div>
  ) : (
    <div className="app-container app-container-result">
      <h1>Result Screen</h1>
      <p>Total Correct: {correct}/{questions.length}</p>
      <button onClick={()=>{
        setCount(0);
        setCorrect(0);
        setSelectedId(()=>{
          return new Array(questions.length).fill(null);
        })
      }}>Restart quiz</button>
    </div>
  );
};

export default App;
