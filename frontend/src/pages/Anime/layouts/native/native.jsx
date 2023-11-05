import React from "react";
import Styles from './native.module.scss';

export default function Native(){
    return(
        <div className={Styles.Native}>
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Char</a></li>
            </ul>
        </div>
    )
}