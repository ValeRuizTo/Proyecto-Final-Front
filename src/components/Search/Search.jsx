import { useState } from 'react';
import './Search.css';

// eslint-disable-next-line react/prop-types
const Search = ({ onResults }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('token');

    const handleSearchAll = () => {
        if (!token) {
            setError('No token found. Please log in.');
            return;
        }

        setLoading(true);
        fetch(`https://api-proyecto-beryl.vercel.app/search/key?search=${encodeURIComponent(searchQuery)}`, {
            method: 'GET',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            onResults(data.tweets || []); // Pasa los resultados a través de la función onResults
            console.log('Resultados de búsqueda (All):', data);
        })
        .catch(error => {
            setLoading(false);
            setError('Error al buscar (All): ' + error.message);
            console.error('Error al buscar (All):', error);
        });
    };

    const handleSearchHashtag = () => {
        if (!token) {
            setError('No token found. Please log in.');
            return;
        }

        setLoading(true);
        fetch(`https://api-proyecto-beryl.vercel.app/search/hashtag?search=${encodeURIComponent(searchQuery)}`, {
            method: 'GET',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            onResults(data.tweets || []); // Pasa los resultados a través de la función onResults
            console.log('Resultados de búsqueda (#):', data);
        })
        .catch(error => {
            setLoading(false);
            setError('Error al buscar (#): ' + error.message);
            console.error('Error al buscar (#):', error);
        });
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Buscar por palabra clave o #" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <div className="btn-container">
                <button className="btn-all" onClick={handleSearchAll}>🔍︎</button>
                <button className="btn-hashtag" onClick={handleSearchHashtag}>#</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Search;
