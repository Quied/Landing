import React from "react";
import Styles from './head.module.scss';
// import TitleGirl from '../../images/title-girl2.png';

export default function Title() {
    return(
        <div className={Styles.Title}>
      
                <div className={Styles.Title__content}> 
                    <div className={Styles.Title__text}>
                        <h2>Your Gateway to Geekdom</h2>
                        <h1>Welcome to on you favorite site with anime content</h1>
                        <h3>Discover the Latest Anime Gems Exclusively with Us!</h3>
                    </div>
                    <div className={Styles.Title__buttons}>
                        <a href="#" className={Styles.Title__buttons__started}>GET STARTED</a>
                        <a href="#" className={Styles.Title__buttons__premium}>GO TO ANIME</a>
                    </div>
                </div>

                <div  className={Styles.Title__picture}>
                    
                </div>
        </div>
    )
}