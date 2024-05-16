import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import imgPeople from '../../assets/people.jpg';
import { AuthContext } from '../../contexts/AuthContext'; // Importar AuthContext
import './login.css';

const Login = () => {
    const authContext = useContext(AuthContext); // Obtener el contexto de autenticación

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
            setUsernameError(value.trim() === '');
        } else if (name === 'password') {
            setPassword(value);
            setPasswordError(value.trim() === '');
        }
    };

    const handleLogin = () => {
        setUsernameError(username.trim() === '');
        setPasswordError(password.trim() === '');

        if (username.trim() !== '' && password.trim() !== '') {
            // Verificar las credenciales
            if (username === "admin@admin.com" && password === "admin") {
                // Credenciales válidas
                localStorage.setItem('username', username);
                authContext.signIn(); // Autenticar al usuario utilizando el contexto de autenticación
                // Redireccionar al usuario a la página deseada
                window.location.href = '/tweets'; // Cambiar la ruta según la necesidad
            } else {
                // Credenciales incorrectas
                setErrorMessage("Las credenciales son incorrectas. Por favor, inténtalo de nuevo.");
            }
        }
    };

    return (
        <div className="container-login">
            <div className="white-container-login">
                <div className="image-container-login">
                    <img src={imgPeople} alt="Logo" />
                </div>
                <div className="text-container-login">
                    <h1>Log In</h1>
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
                            onChange={handleInputChange} />
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
                        {errorMessage && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </form>
                    <button
                        className="btn-ingresar"
                        onClick={handleLogin}>
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;