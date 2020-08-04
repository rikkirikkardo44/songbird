import React from "react";

import './questionList.css';

const QuestionList = () => {
    return (
        <div className="questionList btn-group"
             role="group"
             aria-label="Basic example">
            <button type="button" className="btn btn-primary">Разминка</button>
            <button type="button" className="btn btn-primary">Вопрос 1</button>
            <button type="button" className="btn btn-primary">Вопрос 2</button>
            <button type="button" className="btn btn-primary">Вопрос 3</button>
            <button type="button" className="btn btn-primary">Вопрос 4</button>
            <button type="button" className="btn btn-primary">Вопрос 5</button>
        </div>
    );
};

export default QuestionList;