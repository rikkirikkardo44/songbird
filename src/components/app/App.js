import React from 'react';

import Header from "../header/header";

import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div>Question panel</div>
                <div>
                    <span>Answers</span>
                    <span>Question ifo</span>
                </div>
                <div>next level button</div>
            </div>
        );
    }
};