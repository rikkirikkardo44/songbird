import React from "react";

import Header from "../header/header";
import './gameResult.css';

const gameResult = (props) => {
    const {score, page, startNewGame} = props;
    return (
        <>
            <Header score={score} page={page}/>
            <div className="game-result jumbotron">
                <div id="result" className="d-flex flex-column">
                    <div className="p2"><h1>Поздравляем!</h1></div>
                    <div className="p2">Вы прошли викторину и набрали {score} из 36 возможных баллов</div>
                    <div id="btn" className="p2"><button className="btn-lg" onClick={startNewGame}>Попробовать еще раз!</button></div>
                </div>
            </div>
        </>
    )
};

export default gameResult;