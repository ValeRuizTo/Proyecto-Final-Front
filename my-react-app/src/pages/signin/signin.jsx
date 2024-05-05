import imgPeople from '../../assets/people.jpg';
import React from 'react'
import './signin.css';

const Signin = () => {
    return (
        <div className="container-signin">
        <div className="white-container-signin">
            <div className="image-container-signin">
                <img src={imgPeople} alt="Logo" />
            </div>
            <div className="text-container-signin">
                <h1>Sign In</h1>
                <form className="form-column">
                    <label htmlFor="username">Usuario:</label>
                    <input className="input-username" type="text" placeholder="Ingresa tu usuario" />
                    <label htmlFor="email">Correo:</label>
                    <input className="input-email" type="email" placeholder="Ingresa tu email" />
                    <label htmlFor="user-password">Contraseña:</label>
                    <input className="input-password" type="password" placeholder="Ingresa tu contraseña" />
                </form>
                <button className="btn-crear">Crear cuenta</button>
            </div>
        </div>
    </div>
    )
}

export default Signin