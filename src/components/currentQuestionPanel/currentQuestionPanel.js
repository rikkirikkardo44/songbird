import React from "react";

import imageB4Play from '../../files/grafitti.jpg';
import AudioPlayer from '../player/player';
import './currentQuestionPanel.css';

const CurrentQuestionPanel = (props) => {
    const {audio, img, name} = props.data;

    return (
        <div className="current-question-panel jumbotron rounded">
            {props.levelWin ? <img className="bird-image" src={img} alt={name}/> :
                <img className="bird-image" src={imageB4Play} alt="image"/>}
            <div className="label-audio">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h3>{props.levelWin ? name : '**********'}</h3>
                    </li>
                </ul>
                <div className="audio">
                    <AudioPlayer src={audio}/>
                </div>

            </div>
        </div>
    );
};

export default CurrentQuestionPanel;