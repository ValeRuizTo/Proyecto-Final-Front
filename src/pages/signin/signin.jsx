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
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
            setUsernameError(value.trim() === '');
        } else if (name === 'email') {
            setEmail(value);
            // Validación del formato de correo electrónico utilizando expresiones regulares
            const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value);
            setEmailError(value.trim() === '' || !isValidEmail);
        } else if (name === 'password') {
            setPassword(value);
            setPasswordError(value.trim() === '');
        }
    };

    const handleSignIn = async () => {
        setUsernameError(username.trim() === '');
        setEmailError(email.trim() === '' || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email));
        setPasswordError(password.trim() === '');

        // Verificar si todos los campos están llenos y sin errores antes de enviar la solicitud
        if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && !emailError) {
            try {
                const response = await fetch('https://api-proyecto-beryl.vercel.app/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, email, password })
                });

                if (response.ok) {
                    // Iniciar sesión correctamente, realizar acciones necesarias (como redireccionar)
                    window.location.href = '/success';
                } else {
                    // Manejar errores de autenticación
                    const errorData = await response.json();
                    console.log('Error data:', errorData); // Agregado para depuración
                    setErrorMessage(errorData.error || '¡Credenciales incorrectas!');
                }
            } catch (error) {
                // Manejar errores de red u otros errores
                console.error('Error al iniciar sesión:', error);
                setErrorMessage('Ocurrió un error al iniciar sesión. Detalle: ' + error.message);
            }
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
                            onChange={handleInputChange} />
                        <label htmlFor="email" className={emailError ? 'label-error' : ''}>
                            {emailError ? 'Correo inválido' : 'Correo:'}
                        </label>
                        <input
                            name="email"
                            className={emailError ? 'input-email error' : 'input-email'}
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
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
                    </form>
                    <button
                        className="btn-crear"
                        onClick={handleSignIn}>
                        Ingresar
                    </button>
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signin;