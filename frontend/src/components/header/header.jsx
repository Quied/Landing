import React, {useState} from 'react';
import Styles from './header.module.scss';
import Logo from './images/logo.png';
import Day from './images/day.png';
import SignIn
 from '../../pages/Register/SignIn/in';
export default function Header() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
      setFormVisible(!isFormVisible);
    };
  
    return (
      <div className={Styles.Header}>

        <div>
              {isFormVisible && (
                <div className={Styles.Form}>
                  <SignIn />
                </div>
              )}
            </div>
          );

        <ul>

          <li>
            <a href="/">
              <img src={Logo}></img>
            </a>
          </li>

          <li><a href='/News'>News</a></li>
          <li><a href='/Manga'>Manga</a></li>
          <li><a href='/Anime'>Anime</a></li>
          <li><a href='/Community'>Community</a></li>
          <li><button><img src={Day}></img></button></li>
          
        </ul>

        <div className={Styles.Header__buttons}>
          <a  onClick={toggleForm} >SIGN UP</a>
          <a href='/SignIn'>SIGN IN</a>
        </div>
      </div>
    );
  }