import React, { Component } from 'react';
import Styles from './player.module.scss';
import ReactPlayer from 'react-player'
import video from '../../videos/1.mp4';

export default class ResponsivePlayer extends Component {
    render () {
      return (
        <div className={Styles.Wrapper}>
          <ReactPlayer
            className={Styles.RCP}
            url={video}
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  }