import React from "react";
import Styles from './head.module.scss';
import HeadBackground from '../images/background.png';
import Header from '../header/header.tsx';
import Title from './title';

export default function Head() {
    return (
        <div className={Styles.Head}>
            <Header></Header>
            <Title></Title>
            <div className={Styles.Head__back}>
                <img src={HeadBackground}></img>
            </div>
        </div>
        
    )
}