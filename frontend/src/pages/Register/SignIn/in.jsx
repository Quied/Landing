import React, {useState} from "react";
import Header from "../../../components/header/header";
import Styles from './in.module.scss';
import axios from 'axios';
import FormImage from '../images/back.png';

export default function SignIn(){
    const [name, changeName] = useState('');
    const [password, changePassword] = useState('');
    const [message, changeMessage] = useState('message');

    

    const user = {
        name: name,
        email: "",
        password: password,
    }

    const handleName = (e) => {
        changeName(e.target.value)
    }

    const handlePassword = (e) => {
        changeName(e.target.value)
    }

    const Submit = (e) => {
        e.preventDefault();

        try {
            const response = axios.post('http://localhost:3000/sign-in', user);

            if(response.status === 200){
                changeMessage('User exist');
            } else {
                changeMessage('User doesnt exist');
            }
        }
        catch(e) {console.log(e)}
    }

      return(
        <div className={Styles.SignIn}>         
            <div className={Styles.Panel}>    
                <div>
                    <form onSubmit={Submit}>
                        <div className={Styles.Head}>
                            <a><u>Log in</u></a>
                            <a>Sign Up</a>
                            <button>Close</button>
                        </div>
                        <div className={Styles.Title}>
                            <h1>Welcome back!</h1>
                        </div>
                            <div className={Styles.Inputs}>
                                <input 
                                    type='text'
                                    placeholder="Name"
                                    onChange={handleName}
                                />
                                <input 
                                    type='text'
                                    placeholder="Password"
                                onChange={handlePassword}
                                />
                            </div>  

                    <button className={Styles.Submit} type="submit">Sign In</button>
                    </form>
                </div>
                <div className={Styles.Image}>
                    <img src={FormImage}></img>
                </div>
            </div>
        </div>
      )
}