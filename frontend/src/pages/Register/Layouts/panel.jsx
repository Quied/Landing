import React from "react";
import Styles from './panel.module.scss';

export default function Panel(props){
    return(
        <div className={Styles.Panel}>
            <h1>{props.Type}</h1>

            <div className={Styles.Inputs}>
                <input placeholder="Anime name"></input>
                <input placeholder="Password"></input>
            </div>  

            <div className={Styles.Buttons}>
                <a href="#"> SignUp</a>
            </div>
        </div>
    )
}