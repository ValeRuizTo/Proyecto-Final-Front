import React from 'react'
import imgLogo from '../../assets/logo.jpg';
import './home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="purple-container">
                <div className="img-container">
                    <img src={imgLogo} alt="Logo" />
                </div>
            </div>
            <div className="white-container">
                <h1>socialGarden</h1>
                <h2>¡Bienvenido!</h2>
                <p>Por favor, ingresa tu sesión</p>
                <button className="btn-login">Log In</button>
                <button className="btn-signin">Sign In</button>
            </div>
        </div>
    )
}

export default Home