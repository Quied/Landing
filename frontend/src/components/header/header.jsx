import React from 'react';
import Styles from './header.module.scss';
import Logo from './images/logo.png';

export default function Header() {
    return (
      <div className={Styles.Header}>
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
          <li><button>Theme</button></li>
          
        </ul>

        <div className={Styles.Header__buttons}>
          <a href='/SignUp'>SIGN UP</a>
          <a href='/SignIn'>SIGN IN</a>
        </div>
      </div>
    );
  }