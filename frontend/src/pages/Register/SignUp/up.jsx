import React from "react";
import Header from "../../../components/header/header";
import Styles from './up.module.scss';
import Background from '../images/home.jpg';
import Panel from "../Layouts/panel";

export default function SignUp(){
    return(
        <div className={Styles.SignUp}>
            <Header></Header>

            <Panel Type='Sign Up'></Panel>

            <div className={Styles.Background}>
                <img src={Background}></img>
            </div>

            <div>
                
            </div>
        </div>
    )
}