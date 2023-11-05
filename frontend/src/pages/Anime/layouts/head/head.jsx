import React, {useState} from "react";
import Styles from './head.module.scss';
import ReactPlayer from 'react-player'
import Playerr from '../Player/player';

import Sakura from './images/sakura.png';
import Gojo from './images/gojo.png';
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

    const [Height, setHeight] = useState(400);
    const [Width, setWidth] = useState(200);
    
    const handleMouseEnter = () => {
      setIsMuted(false);
      setIsHovered(true);
      
      setWidth(210);
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
            width={Width}
            height={Height}
            style={{borderRadius: '10rem'}}
          />
        </div>
      </div>

        
    )
}

function Character(props){
  return(
    <div className={Styles.Character}>
      <img src={Gojo}></img>
      <h2>{props.title}</h2>
  </div>
  );
}

export default function Head(){
    return(
      <div className={Styles.Wrapper}>
          <div className={Styles.Head}>
              <div className={Styles.Title}>
                  <h3>Enjoy your favorite anime with us!</h3>
                  <h1>Enjoy your favorite anime with us!</h1>

                  <div className={Styles.Characters}>
                    <Character title='YoWai Mo'/>
                  </div>
              </div>

              <div className={Styles.Players}>
                  <Player video={video7}></Player>
                  <Player video={video8}></Player>
                  <Player video={video9}></Player>
                  
              </div>
              
          </div>
        </div>
    )
}