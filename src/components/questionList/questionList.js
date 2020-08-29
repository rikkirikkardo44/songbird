import React from "react";

import './questionList.css';

const QuestionList = ({page}) => {
    const labels = [
        {name: 'Разминка', index: 0},
        {name: 'Домашние птицы', index: 1},
        {name: 'Ночные птицы', index: 2},
        {name: 'Нелетающие птицы', index: 3},
        {name: 'Дикие птицы', index: 4},
        {name: 'Морские птицы', index: 5}
    ];
    const liElements = labels.map(({name, index}) => {
        const active = index === page ? "page-item active" : "page-item disabled";
        return <li className={active} key={index}><a className="page-link" href="/#">{name}</a></li>
    });

    return (
        <div className="question-list">
            <ul className="pagination">
                {liElements}
            </ul>
        </div>
    );
};

export default QuestionList;