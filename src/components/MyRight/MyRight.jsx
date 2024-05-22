import React from 'react';
import { Link } from 'react-router-dom';
import '../Right/Right.css';
import {Perfil} from '../index';

const MyRight = () => {
    return (
        <div className="right-container">
            <Perfil/>

            <div className="right-container-buttons">
                <Link to="/new" className="btn-create-tweet">Crear Tweet</Link>
                <Link to="/tweets"  className="btn-other">Otros Tweets</Link>
            </div>
        </div>
    )
}

export default MyRight