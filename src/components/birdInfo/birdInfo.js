import React from "react";

import AudioPlayer from '../player/player';

import './birdInfo.css';

const BirdInfo = ({data, index}) => {
    if (index === false) {
        return (
            <div className="col-md-8 bird_info">
                <div className="bird_info-body">
                    <h4>Послушайте плеер и выберите вариант.</h4>
                </div>
            </div>
        )
    } else {
        return (
           <div className="col-md-8 bird_info">
                <div className="bird_info-body">
                    <div className="bird_info-content">
                        <img className="bird-image" src={data[index].img} alt={data[index].name}/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h4>{data[index].name}</h4></li>
                            <li className="list-group-item">{data[index].latin}</li>
                            <li className="list-group-item audio"><AudioPlayer src={data[index].audio}/></li>
                        </ul>
                    </div>
                    <div>{data[index].description}</div>
                </div>
            </div>
        )
    }
};

export default BirdInfo;