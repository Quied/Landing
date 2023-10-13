import React from "react";
import Head from "../../components/head/head";
import Styles from './home.module.scss';

function MangaSection(){
    return(
        <div className={Styles.Manga}>

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
            <Statistic></Statistic>
            <MangaSection></MangaSection>
        </div>
    )
}