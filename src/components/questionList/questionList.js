import React from "react";

import './questionList.css';

const QuestionList = (props) => {
    const labels = [
        {name: 'Разминка', index: 0},
        {name: 'Воробьиные', index: 1},
        {name: 'Лесные птицы', index: 2},
        {name: 'Певчие птицы', index: 3},
        {name: 'Хищные птицы', index: 4},
        {name: 'Морские птицы', index: 5}
    ];
    const {page} = props;
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