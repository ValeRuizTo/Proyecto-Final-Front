import React from 'react';
import imgPeople from '../../assets/people.jpg';
import './login.css';

const Login = () => {
    return (
        <div className="container-login">
            <div className="white-container-login">
                <div className="image-container-login">
                    <img src={imgPeople} alt="Logo" />
                </div>
                <div className="text-container-login">
                    <h1>Log In</h1>
                    <form className="form-column">
                        <label htmlFor="username">Usuario:</label>
                        <input className="input-username" type="text" placeholder="Ingresa tu usuario" />
                        <label htmlFor="user-password">Contraseña:</label>
                        <input className="input-password" type="password" placeholder="Ingresa tu contraseña" />
                    </form>
                    <button className="btn-ingresar">Ingresar</button>
                </div>
            </div>
        </div>
    )
}

export default Login;