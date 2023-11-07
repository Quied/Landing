import React from "react";
import Styles from './layout.module.scss';
import Header from "./header";

export default function Form(){
    return(
        <div className={Styles.Form}>
            <div>
                <Header></Header>

            </div>
        </div>
    )
}