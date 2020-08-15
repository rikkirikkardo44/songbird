import React from "react";
import AudioPlayer from "react-h5-audio-player";

import 'react-h5-audio-player/lib/styles.css';
import "./player.css";

export default ({src}) => {
    return (
        <div className="audio-player">
            <AudioPlayer
                src={src}
                layout="horizontal-reverse"
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
                customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}/>
        </div>
    );
};