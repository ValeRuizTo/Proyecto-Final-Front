import React from 'react';
import { Link } from 'react-router-dom';
import './Right.css';
import imgProfile from '../../assets/profile.jpg';

const Right = () => {
    return (
        <div className="right-container">
            <div className="img-container-right">
                 <img src={imgProfile} alt="Profile" />
                 <p className="user">Nombre Usuario</p>
                 <p className="email-user">Correo</p>
            </div>

            <div className="right-container-buttons">
                <Link to="/new"  className="btn-create-tweet">Crear Tweet</Link>
                <Link to="/my"  className="btn-my">Mis Tweets</Link>
            </div>
        </div>
    )
}

export default Right