import React, {useEffect, useState} from "react";
import Styles from './panel.module.scss';
import axios from 'axios';

export default function Panel(props){

    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [message, changeMessage] = useState('message');

    const handleName = (e) => {
        changeName(e.target.value);
    }

    const handleEmail = (e) => {
        changeEmail(e.target.value);
    }

    const handlePassword = (e) => {
        changePassword(e.target.value);
    }

    const Submit = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
        }

        try {
            const response = axios.post('http://localhost:3000/sign-up', newUser);

            if(response.status === 201){
                console.log('New user was created');
                changeMessage('User was created');
            } else {
                console.log('something went wrong');
                changeMessage('Something went wrong');
            }
        }
        catch(e){
            console.log(e);
        }
    }


    return(
        <form  onSubmit={Submit}>
            <div className={Styles.Panel}>
                <h1>{props.Type}</h1>

                <div className={Styles.Inputs}>
                    <input 
                        type='text'
                        placeholder="Name"
                        onChange={handleName}
                    />
                <input 
                        type='text'
                        placeholder="Email"
                        onChange={handleEmail}
                    />
                    <input 
                        type='text'
                        placeholder="Password"
                        onChange={handlePassword}
                    />
                </div>  

                <button className={Styles.Submit} type="submit">SignUp</button>
                <div className={Styles.Message}>{message}</div>
            </div>
        </form>
    )
}