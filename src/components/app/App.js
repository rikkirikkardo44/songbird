import React from 'react';

import Header from "../header/header"
import GameResult from "../gameResult/gameResult";
import CurrentQuestionPanel from "../currentQuestionPanel/currentQuestionPanel";
import AnswerOptionBlock from "../answerOptionBlock/answerOptionBlock";
import {birdsData} from '../../data/birdsData'
import wrongAudio from "../../data/Sound_lose.mp3";
import correctAudio from "../../data/Sound_win.mp3";

import './App.css';

export default class App extends React.Component {
    state = {
        score: 0,
        page: 0,
        number: this.randomNumber(),
        gameEnd: false,
        levelWin: false
    };

    addScore(newScore) {
        this.setState({score: newScore});
    };

    levelEnd() {
        this.setState((state) => {
            if (this.state.page === 5) {
                return {state, ...{gameEnd: true}}
            } else {
                return {
                    state, ...{
                        page: state.page + 1,
                        number: this.randomNumber(),
                        levelWin: false
                    }
                };
            }
            ;
        });
    };

    _ifWin() {
        this.setState({levelWin: true})
    };

    startNewGame() {
        this.setState({
            score: 0,
            page: 0,
            number: this.randomNumber(),
            gameEnd: false,
            levelWin: false
        });
    };

    randomNumber() {
        return Math.floor(Math.random() * 6);
    };

    render() {
        const {score, page, number, levelWin} = this.state;
        const data = birdsData[page];
        const playGame = (
            <>
                <Header score={score} page={page}/>
                <CurrentQuestionPanel data={data[number]} levelWin={levelWin}/>
                <AnswerOptionBlock levelEnd={(scr) => this.levelEnd(scr)}
                                   addScore={(scr) => this.addScore(scr)}
                                   win={() => this._ifWin()}
                                   data={data}
                                   number={number}
                                   score={score}/>
                <audio src={correctAudio} id="correct"/>
                <audio src={wrongAudio} id="wrong"/>
            </>
        )
        return !this.state.gameEnd ? playGame :
            <GameResult score={score} name={data[number].name} startNewGame={() => this.startNewGame()}/>;
    };
};