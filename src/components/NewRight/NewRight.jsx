import React from 'react';
import { Link } from 'react-router-dom';
import '../Right/Right.css';
import {Perfil} from '../index';

const NewRight = () => {
    return (
        <div className="right-container">
            <Perfil/>

            <div className="right-container-buttons">
                <button className="btn-disabled">Crear Tweet</button>
                <Link to="/tweets"  className="btn-other">Otros Tweets</Link>
            </div>
        </div>
    )
}

export default NewRight