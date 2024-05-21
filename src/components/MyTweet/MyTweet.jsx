import React, { useState, useEffect } from 'react';
import '../Tweet/Tweet.css';


const MyTweet = ({ username, tweet, hashtag, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentTweet, setCurrentTweet] = useState(tweet);
    const [currentHashtag, setCurrentHashtag] = useState(hashtag);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Recuperar el token de localStorage
        const token = localStorage.getItem('token');
        // Hacer la solicitud PUT a la API con el token de autorización
        fetch(`https://api-proyecto-beryl.vercel.app/newtweet/${index}`, {
            method: 'PUT',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: currentTweet,
                hashtag: currentHashtag
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Tweet actualizado:', data);
        })
        .catch(error => console.error('Error actualizando tweet:', error));
    };

    return (
        <div className="container-tweet"> 
            <div className="white-container-tweet">
                <p className="user">{username}</p>
                {isEditing ? (
                    <div>
                        <input value={currentTweet} onChange={(e) => setCurrentTweet(e.target.value)} />
                        <input value={currentHashtag} onChange={(e) => setCurrentHashtag(e.target.value)} />
                    </div>
                ) : (
                    <div>
                        <p className="text-tweet">{currentTweet}</p>
                        <p className="text-hashtag">{currentHashtag}</p>
                    </div>
                )}
            </div>
            <div className="purple-container-tweet">
                {isEditing ? (
                    <p className="save" onClick={handleSave}>💾</p>
                ) : (
                    <p className="edit" onClick={handleEdit}>🖍</p>
                )}
                <p className="delete">🗑</p>
            </div>
        </div>
    );
};

// Componente para mostrar la lista de tweets del usuario logueado
const TweetsList = () => {
    const [tweets, setTweets] = useState([]);
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        // Recuperar el token de localStorage
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
    
        // Hacer la solicitud GET a la API con el token de autorización
        fetch(`https://api-proyecto-beryl.vercel.app/profile/${storedUsername}`, {
            headers: {
                'Authorization': token // Incluye el token en el encabezado de autorización
            }
        })
        .then(response => response.json())
        .then(data => {
            // Si 'data' tiene una propiedad 'tweets' que es un array, establece 'tweets' en esa propiedad
            if (data && Array.isArray(data.tweets)) {
                setTweets(data.tweets);
                setUsername(data.username); // Establecer el nombre de usuario
            } else {
                console.error('Error fetching tweets: No se encontraron tweets en la respuesta de la API');
            }
        })
        .catch(error => console.error('Error fetching tweets:', error));
    }, []);
    

    return (
        <div>
            {tweets.map((tweet, index) => (
                <MyTweet
                    key={index}
                    username={username} // Pasar el nombre de usuario a cada MyTweet
                    tweet={tweet.tweet}
                    hashtag={tweet.hashtag}
                    index={index}
                />
            ))}
        </div>
    );
};

export default TweetsList;
