import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function onDelete(selectedQuestion) {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== selectedQuestion.id)
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.length > 0 ? (
        <ul>
          {questions.map((q) => (
            <QuestionItem key={q.id} question={q} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default QuestionList;
