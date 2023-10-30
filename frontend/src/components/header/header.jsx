import React from 'react';
import Styles from './header.module.scss';
import Logo from '../images/logo.png';

export default function Header() {
    return (
      <div className={Styles.Header}>
        <ul>

          <li>
            <a href="/">
              <img src={Logo}></img>
            </a>
          </li>

          <li>News</li>
          <li>Manga</li>
          <li><a href='/Anime'>Anime</a></li>
          <li>Community</li>
          
        </ul>

        <div className={Styles.Header__buttons}>
          <a href='#'>SIGN UP</a>
          <a href='#'>SIGN IN</a>
        </div>
      </div>
    );
  }