import React from 'react';
import { Link } from 'react-router-dom';
import '../Right/Right.css';
import imgProfile from '../../assets/profile.jpg';

const NewRight = () => {
    return (
        <div className="right-container">
            <div className="img-container-right">
                 <img src={imgProfile} alt="Profile" />
                 <p className="user">Nombre Usuario</p>
                 <p className="email-user">Correo</p>
            </div>

            <div className="right-container-buttons">
                <button className="btn-disabled">Crear Tweet</button>
                <Link to="/tweets"  className="btn-other">Otros Tweets</Link>
            </div>
        </div>
    )
}

export default NewRight