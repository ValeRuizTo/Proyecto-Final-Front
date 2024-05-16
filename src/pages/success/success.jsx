import React from 'react';
import { Link } from 'react-router-dom';
import imgSuccess from '../../assets/success.jpg';
import './success.css';

const Success = () => {
    return (
        <div className="container-success">
            <div className="white-container-success">
                <div className="img-container-success">
                    <img src={imgSuccess} alt="Error" />
                </div>
                <div className="text-container-success">
                    <h1>¡Creado con éxito!</h1>
                    <p>Vuelve a la página principal</p>
                </div>
                <Link to="/" className="btn-home">Página principal</Link>
            </div>
        </div>
    )
}

export default Success;