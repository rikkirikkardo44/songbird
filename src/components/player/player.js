import React, {useRef} from "react";
import AudioPlayer from "react-h5-audio-player";

import 'react-h5-audio-player/lib/styles.css';
import "./player.css";

export default ({src, levelEnd}) => {
    const ref = useRef();

    if (levelEnd) {
        ref.current.audio.current.pause();
    }
    return (
            <AudioPlayer
                src={src}
                ref={ref}
                layout="horizontal"
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
                customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}/>
    );
};