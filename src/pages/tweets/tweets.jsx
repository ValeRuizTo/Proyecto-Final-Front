import React from 'react';
import {useContext} from 'react';
import { AuthContext} from '../../contexts/AuthContext'; 
import { Link } from 'react-router-dom';
import './tweets.css';

const Tweets = () => {
    const { authStatus, signOut } = useContext(AuthContext);

    const handleLogout = async () => {
        localStorage.setItem("username", "");
        signOut();
        window.location.href = "/";
    };
    
    return (
        <div className="container-success">
            <div className="white-container-success">    
                    <h1>¡TWEETS!</h1>
                    <button  className="btn-home" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Tweets;