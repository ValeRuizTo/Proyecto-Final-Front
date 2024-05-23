import { useState, useEffect } from 'react';
import '../Tweet/Tweet.css';

// eslint-disable-next-line react/prop-types
const MyTweet = ({ username, tweet, hashtag, lugar }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [currentTweet, setCurrentTweet] = useState(tweet);
    const [currentHashtag, setCurrentHashtag] = useState(hashtag);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        const finalHashtag = currentHashtag ? currentHashtag : '#socialgarden';

        // Recuperar el token de localStorage
        const token = localStorage.getItem('token');
        // Hacer la solicitud PUT a la API con el token de autorización
        fetch(`https://api-proyecto-beryl.vercel.app/newtweet/${lugar}`, {
            method: 'PUT',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: currentTweet,
                hashtag: finalHashtag
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Tweet actualizado:', data);
            // Actualizar el estado con el hashtag final
            setCurrentHashtag(finalHashtag);
        })
        .catch(error => console.error('Error actualizando tweet:', error));
    };

    const handleDelete = () => {
        //Recuperar el token de localStorage
        const token = localStorage.getItem('token');
        // Hacer la solicitud DELETE a la API con el token de autorización
        fetch(`https://api-proyecto-beryl.vercel.app/newtweet/${lugar}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Tweet eliminado:', data);
            window.alert('¡Tweet eliminado con éxito!'); // Mostrar alerta de eliminación exitosa
            window.location.reload(); // Recargar la página después de eliminar el tweet
        })
        .catch(error => console.error('Error eliminando tweet:', error));
    };

    return (
        <div className="container-tweet"> 
            <div className="white-container-tweet">
                <p className="user">{username}</p>
                {isEditing ? (
                    <div className="input-container">
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
                        <button className="save" onClick={handleSave}>🖿</button>
                    ) : (
                        <button className="edit" onClick={handleEdit}>🖍</button>
                    )}
                    <button className="delete" onClick={handleDelete}>🗑</button>
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
                    lugar={tweet.lugar}
                />
            ))}
        </div>
    );
};

export default TweetsList;