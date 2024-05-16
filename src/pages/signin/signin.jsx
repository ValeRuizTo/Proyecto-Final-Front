import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgPeople from '../../assets/people.jpg';
import './signin.css';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
            setUsernameError(value.trim() === '');
        } else if (name === 'email') {
            setEmail(value);
            setEmailError(value.trim() === '');
        } else if (name === 'password') {
            setPassword(value);
            setPasswordError(value.trim() === '');
        }
    };

    const handleSignIn = () => {
        setUsernameError(username.trim() === '');
        setEmailError(email.trim() === '');
        setPasswordError(password.trim() === '');

        if (username.trim() !== '' && password.trim() !== '' && email.trim() ) {
            return <Link to="/" />;
        }
    };

    return (
        <div className="container-signin">
            <div className="white-container-signin">
                <div className="image-container-signin">
                    <img src={imgPeople} alt="Logo" />
                </div>
                <div className="text-container-signin">
                    <h1>Sign In</h1>
                    <form className="form-column">
                        <label htmlFor="username" className={usernameError ? 'label-error' : ''}>
                            {usernameError ? 'Campo vacío' : 'Usuario:'}
                        </label>
                        <input
                            name="username"
                            className={usernameError ? 'input-username error' : 'input-username'}
                            type="text"
                            placeholder="Ingresa tu usuario"
                            value={username}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email" className={emailError ? 'label-error' : ''}>
                            {emailError ? 'Campo vacío' : 'Correo:'}
                        </label>
                        <input
                            name="email"
                            className={emailError ? 'input-email error' : 'input-email'}
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="user-password" className={passwordError ? 'label-error' : ''}>
                            {passwordError ? 'Campo vacío' : 'Contraseña:'}
                        </label>
                        <input
                            name="password"
                            className={passwordError ? 'input-password error' : 'input-password'}
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </form>
                    <Link
                        to={username.trim() !== '' && password.trim() !== '' ? '/success' : '#'}
                        className="btn-crear"
                        onClick={handleSignIn}>
                        Ingresar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;