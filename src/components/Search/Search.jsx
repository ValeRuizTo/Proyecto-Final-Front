import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    const handleSearchAll = () => {
        fetch(`https://api-proyecto-beryl.vercel.app/search/key?search=${encodeURIComponent(searchQuery)}`, {
            method: 'GET',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resultados de búsqueda (All):', data);
            // Aquí puedes manejar los resultados de la búsqueda (por ejemplo, actualizar el estado para mostrar los resultados)
        })
        .catch(error => console.error('Error al buscar (All):', error));
    };

    const handleSearchHashtag = () => {
        fetch(`https://api-proyecto-beryl.vercel.app/search/hashtag?search=${encodeURIComponent(searchQuery)}`, {
            method: 'GET',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resultados de búsqueda (#):', data);
            // Aquí puedes manejar los resultados de la búsqueda (por ejemplo, actualizar el estado para mostrar los resultados)
        })
        .catch(error => console.error('Error al buscar (#):', error));
    
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="🔍︎" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <div className="btn-container">
                <button className="btn-all" onClick={handleSearchAll}>All</button>
                <button className="btn-hashtag" onClick={handleSearchHashtag}>#</button>
            </div>
        </div>
    );
};

export default Search;
