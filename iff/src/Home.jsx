import React from "react";
import Navbar from "./Navbar";
import Coursepage from "./Coursepage";
import VideoJS from './VideoJS';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
// import VideoPlayer from "./VideoJS";
import Upload from "./Upload";
// import Pdfviewer from "./Pdfviewer";


const Home = () => {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: 'http://localhost:8080/video.mp4',
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

    return (
        <>
            <Navbar />
            <Coursepage />
            <Upload/>
            <div>Rest of app here</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
      {/* <Pdfviewer document={'http://localhost:8080/kipyekcq8thwjzgwtam5.pdf'} /> */}
        </>
    )
}

export default Home;