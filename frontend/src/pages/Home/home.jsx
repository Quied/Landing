import React, {useState} from "react";
import ItemsCarousel from 'react-items-carousel';
import Head from "../../components/head/head";
import Styles from './home.module.scss';
import MangaImage from '../../components/images/mang.jpg'; // TEST
import Title1 from '../../components/images/title1.jpeg'; // TEST
import Title2 from '../../components/images/title2.jpeg'; // TEST
import Title3 from '../../components/images/title3.jpeg'; // TEST
import Title4 from '../../components/images/title4.jpeg'; // TEST
import Title5 from '../../components/images/title5.jpeg'; // TEST
import Title6 from '../../components/images/title6.jpeg'; // TEST
import Title7 from '../../components/images/title7.jpeg'; // TEST

function AnimeSlider(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 150;

    return(
        <div className={Styles.Manga__Slider}>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={5}
                    gutter={20}
                    leftChevron={<button className={Styles.SliderButton}>{'<'}</button>}
                    rightChevron={<button className={Styles.SliderButton}>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    <AnimeItem image={Title5}></AnimeItem>
                    <AnimeItem image={Title7}></AnimeItem>
                    <AnimeItem image={Title7}></AnimeItem>
                    <AnimeItem image={Title6}></AnimeItem>
                    <AnimeItem image={Title7}></AnimeItem>
                    <AnimeItem image={Title7}></AnimeItem>
                    <AnimeItem image={Title6}></AnimeItem>
                    <AnimeItem image={Title7}></AnimeItem>
                </ItemsCarousel>
            </div>
        </div>
    );
}

function AnimeItem(props){
    return(
        <div>
             <div className={Styles.Anime__item}>
                <img src={props.image}></img>
                <h1>Attack Of Tittans</h1>
            </div>
        </div>
    )
}

function AnimeSection() {
    return(
        <div className={Styles.Anime}>
            <h1>Best Anime of the last time</h1>
            <AnimeSlider></AnimeSlider>
            <AnimeSlider></AnimeSlider>
        </div>
    )
}

function MangaItem(props){
    return(
        <div className={Styles.Manga__item}>
            <img src={props.image}></img>
            <h1>Attack Of Tittans</h1>
        </div>
    )
}

function MangaSlider(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 150;

    return(
        <div className={Styles.Manga__Slider}>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={5}
                    gutter={20}
                    leftChevron={<button className={Styles.SliderButton}>{'<'}</button>}
                    rightChevron={<button className={Styles.SliderButton}>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    <MangaItem image= {Title1}/>
                    <MangaItem image= {Title2}/>
                    <MangaItem image= {Title4}/>
                    <MangaItem image= {Title3}/>
                    <MangaItem image= {Title4}/>
                    <MangaItem image= {Title1}/>
                    <MangaItem image= {Title1}/>
                </ItemsCarousel>
            </div>
        </div>
    );
}

function MangaSection(){
    return(
        <div className={Styles.Manga}>
            <h1>Best Manga of the last time</h1>
            <MangaSlider></MangaSlider>
            <MangaSlider></MangaSlider>
            
            <button className={Styles.Manga__butt}>Show all</button>
        </div>
    )
}

function Statistic(){
    return(
        <div className={Styles.Statistic}>
            <div className={Styles.Statistic__component}>
                <h1>1000+</h1>
                <h1>Anime's</h1>
            </div>

            <div className={Styles.Statistic__component}>
                <h1>1000+</h1>
                <h1>Anime's</h1>
            </div>

            <div className={Styles.Statistic__component}>
                <h1>1000+</h1>
                <h1>Manga's</h1>
            </div>
        </div>
    )
}

export default function Home(){

    return(
        <div>
            <Head></Head>   
            <MangaSection></MangaSection>
            <AnimeSection></AnimeSection>
        </div>
        
    )
}