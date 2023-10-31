import React from "react";
import Styles from './content.module.scss';


import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  function item() {
    return (
        <div className={Styles.Item}>
            <a href="#">
                  <div className={Styles.Item__details}>
                    <h3>Jujutsu Kaisen</h3>
                  </div>
            </a>
        </div>
    );
}

function PopularList(props){
    return(
        <div>
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


function All(){
    return(
        <div className={Styles.All}>
            <PopularList />
        </div>
    )
}

function Genres(){
    return(
        <div className={Styles.Gengres}>
            <div className={Styles.Gengres__Wrapper}>
                <a href="#">Action</a>
                <a href="#">Adventures</a>
                <a href="#">Demons</a>
                <a href="#">Isekai</a>
            </div>
        </div>
    )
}

export default function Content(){
    return(
        <div className={Styles.Wrapper}>
            <All></All>
            <Genres></Genres>
        </div>
    )
}