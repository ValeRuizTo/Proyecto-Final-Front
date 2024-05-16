import React from 'react';
import { Link } from 'react-router-dom';
import './tweets.css';

const Tweets = () => {
    return (
        <div className="container-success">
            <div className="white-container-success">    
                    <h1>¡TWEETS!</h1>
                    <Link to="/" className="btn-home">Log Out</Link>
            </div>
        </div>
    )
}

export default Tweets;