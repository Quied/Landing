import React, {useState} from "react";
import Header from "../../../components/header/header";
import Styles from './in.module.scss';
import axios from 'axios';

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
            <Header></Header>
            <div className={Styles.Panel}>
               
                <form  onSubmit={Submit}>
            <div className={Styles.Panel}>
            <h1>Log In</h1>

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
            </div>
            <div className={Styles.Message}>{message}</div>
        </form>
            </div>
    </div>
      )
}