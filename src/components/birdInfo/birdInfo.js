import React from "react";

import AudioPlayer from '../player/player';

import './birdInfo.css';

const BirdInfo = ({data, index}) => {
    if (index === false) {
        return (
            <div className="col-md-8 info">
                <div className="bird">
                    <h4>Послушайте плеер и выбарите вариант.</h4>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-md-8 info">
                <div className="bird">
                    <div className="bird-info">
                    <img className="bird-image" src={data[index].img}/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h4>{data[index].name}</h4></li>
                        <li className="list-group-item">{data[index].latin}</li>
                        {/*<li className="list-group-item">
                            <audio src={data[index].audio} controls/>
                        </li>*/}
                        <li className="list-group-item audio"><AudioPlayer src={data[index].audio}/></li>
                    </ul>
                    </div>
                    {/*<audio className="audio" src={data[index].audio} controls/>*/}
                    <div>{data[index].description}</div>
                </div>

            </div>
        )
    }
};

export default BirdInfo;