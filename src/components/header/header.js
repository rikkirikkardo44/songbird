import React from "react";

import QuestionList from "../questionList/questionList";

import './header.css';

const Header = ({score, page}) => {
    return (
        <div className="header">
            <div className="top-panel">
                <div className="logo"/>
                <div className="score"><h4>Очки: <span>{score}</span></h4></div>
            </div>
            <QuestionList page={page}/>
        </div>
    );
};

export default Header;