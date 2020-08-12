import React from "react";

import QuestionList from "../questionList/questionList";

import './header.css';

const Header = ({score, page}) => {
    return (
        <div className="header">
            <div className="top-panel">
                <div className="logo"/>
                <h4>Score: <span className="score">{score}</span></h4>
            </div>
            <QuestionList page={page}/>
        </div>
    );
};

export default Header;