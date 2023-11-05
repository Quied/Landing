import React, {Component} from "react";
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Styles from './main.module.scss';
import Native from "../native/native";
import back from './images/1.jpeg';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  function item() {
    return (
        <div className={Styles.Item}>
            <a href="#">
                  <div className={Styles.Item__details}>
                    <h1>8.7</h1>
                    <img src={back}></img>
                    <p>Attack on tittans</p>
                  </div>
            </a>
        </div>
    );
}

function PopularList(props){
    return(
        <div className={Styles.WrapperTittle}>
            <h1>{props.Title}</h1>

            <div className={Styles.Slider}>    
            </div>
                <Carousel responsive={responsive}>
                  <div>{item()}</div>
                  <div>{item()}</div>
                  <div>{item()}</div>
                  <div>{item()}</div>
                  <div>{item()}</div>
                  <div>{item()}</div>
                  <div>{item()}</div>
                  <div>{item()}</div>
                </Carousel>
        </div>
    )
}


export default function Main(){
    return(
        <div>
             <PopularList Title={'Now watching'}></PopularList>
             <Native></Native>
             <PopularList Title={'New releases'}></PopularList>
        </div>
    )
}