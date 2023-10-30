import React, {useState} from "react";
import Styles from './head.module.scss';
import ReactPlayer from 'react-player'
import Playerr from '../Player/player';

import video1 from '../../videos/1.mp4';
import video2 from '../../videos/2.mp4';
import video3 from '../../videos/3.mp4';
import video4 from '../../videos/4.mp4';
import video5 from '../../videos/5.mp4';
import video6 from '../../videos/6.mp4';
import video7 from '../../videos/7.mp4';

function Player(props){
    const [isMuted, setIsMuted] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsMuted(false);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsMuted(true);
    setIsHovered(false);
  };

    return(
        <div className={Styles.Video}>
        <div
          className={`${Styles.HeadVideoContainer} ${isHovered ? Styles.Enlarged : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ReactPlayer
            className={Styles.HeadVideo}
            url={props.video}
            loop={true}
            playing={true}
            controls={false}
            muted={isMuted}
            width='200px'
            height='500px'
            style={{borderRadius: '5rem'}}
          />
        </div>
      </div>

        
    )
}

export default function Head(){
    return(
        <div className={Styles.Head}>
            <div className={Styles.Title}>
                <h2>hello world</h2>
                <h1>Welcome to the site where the art of anime 
                    comes to life. We offer a variety of genres 
                    and series from action to drama. Enjoy the 
                    colorful characters and exciting adventures 
                    that await you on every page.</h1>
            </div>

            <div className={Styles.Players}>
                <Player video={video7}></Player>
                <Player video={video2}></Player>
                <Player video={video3}></Player>
                
            </div>
            
        </div>
    )
}