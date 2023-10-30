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
import video8 from '../../videos/8.mp4';
import video9 from '../../videos/9.mp4';

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
            width='230px'
            height='500px'
            style={{borderRadius: '10rem'}}
          />
        </div>
      </div>

        
    )
}

export default function Head(){
    return(
        <div className={Styles.Head}>
            <div className={Styles.Title}>
                <h2>YoWai Mo</h2>
                <h1>Welcome </h1>
                <h3>Welcome to the site where the art of anime 
                    comes to life. We offer a variety of genres 
                    and series from action to drama. Enjoy the 
                    colorful characters and exciting adventures 
                    that await you on every page.</h3>
            </div>

            <div className={Styles.Players}>
                <Player video={video7}></Player>
                <Player video={video8}></Player>
                <Player video={video9}></Player>
                
            </div>
            
        </div>
    )
}