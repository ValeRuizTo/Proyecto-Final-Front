import React from 'react';
import imgError from '../../assets/error.jpg';
import './other.css';

const Other = () => {
    return (
        <div className="container-other">
            <div className="white-container-other">
                <div className="img-container-other">
                    <img src={imgError} alt="Error" />
                </div>
                <div className="text-container-other">
                    <h1>404</h1>
                    <p>Página no encontrada</p>
                </div>
                <button className="btn-home">Página principal</button>
            </div>
        </div>
    )
}

export default Other;