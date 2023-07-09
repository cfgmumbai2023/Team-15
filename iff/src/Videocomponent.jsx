import React from "react";
import VideoJS from './VideoJS';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

const Videocomponent=()=>{

        const playerRef = React.useRef(null);
      
          const videoJsOptions = {
            autoplay: true,
            controls: true,
            responsive: true,
            fluid: true,
            sources: [{
              src: 'http://localhost:8080/Employees%20Around%20the%20World%20_%20JPMorgan%20Chase%20%26%20Co..mp4',
              type: 'video/mp4'
            }]
          };
        
          const handlePlayerReady = (player) => {
            playerRef.current = player;
        
            // You can handle player events here, for example:
            player.on('waiting', () => {
              videojs.log('player is waiting');
            });
        
            player.on('dispose', () => {
              videojs.log('player will dispose');
            });
          };
    return(
        <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </>
    );
}

export default Videocomponent;