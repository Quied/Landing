import React from "react";
import Header from "../../components/header/header";
import Head from "./layouts/head/head";
import Main from "./layouts/main/main";
import Content from "./layouts/content/content";
import Native from "./layouts/native/native";

export default function Anime(){
    return(
        <>
            <Header></Header>
            <Head></Head>
            <Native></Native>
            <Main></Main>
            <Content></Content>
        </>
    )
}