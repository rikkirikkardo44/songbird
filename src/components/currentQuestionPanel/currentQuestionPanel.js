import React from "react";

import imageB4Play from '../../data/grafitti.jpg';
import AudioPlayer from '../player/player';
import './currentQuestionPanel.css';

const CurrentQuestionPanel = (props) => {
    const {audio, img, name} = props.data;

    return (
        <div className="current-question-panel jumbotron rounded">
            <div className="bird-image">
                {props.levelWin ? <img src={img} alt={name}/> :
                    <img className="bird-image" src={imageB4Play} alt="bird-image"/>}
            </div>
            <div className="bird-audio">
                <div className="question_body">
                    <div className="title"><h3>{props.levelWin ? name : '**********'}</h3></div>
                    <div className="audio"><AudioPlayer src={audio} levelEnd={props.levelWin}/></div>
                </div>
            </div>
        </div>
    );
};

export default CurrentQuestionPanel;