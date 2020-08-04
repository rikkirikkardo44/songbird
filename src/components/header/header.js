import React from "react";

import QuestionList from "../questionList/questionList";
import logo from '../../files/LogoMakr_3t4mUs.png';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex flex-column">
            <div className="top-panel d-flex">
                <img src={logo} className="img-fluid" alt="Responsive image"/>
                <h2>Score:</h2><span className="score">4</span>
            </div>
            <div className="p-2">
                <QuestionList/>
            </div>
        </div>
    );
};

export default Header;