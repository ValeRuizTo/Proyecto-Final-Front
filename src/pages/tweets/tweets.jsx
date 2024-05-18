import React from 'react';
import {useContext} from 'react';
import { AuthContext} from '../../contexts/AuthContext';
import { Layout } from '../../components';
import { Link } from 'react-router-dom';
import './tweets.css';

const Tweets = () => {
    return (
        <Layout/>
    )
}

export default Tweets;