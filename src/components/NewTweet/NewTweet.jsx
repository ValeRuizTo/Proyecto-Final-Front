import { useState } from 'react';
import './NewTweet.css';

const NewTweet = () => {
    const [tweet, setTweet] = useState('');
    const [hashtag, setHashtag] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Recuperar el token de localStorage
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username'); // Recuperar el nombre de usuario de localStorage

        // Hacer la solicitud POST a la API con el token de autorización
        fetch('https://api-proyecto-beryl.vercel.app/newtweet', {
            method: 'POST',
            headers: {
                'Authorization': token, // Incluye el token en el encabezado de autorización
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: tweet,
                hashtag: hashtag,
                username: username // Incluye el nombre de usuario en el cuerpo de la solicitud
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error al agregar tweet:', data.error);
            } else {
                console.log('Tweet agregado correctamente:', data);
                // Limpiar los campos de entrada después de enviar el tweet
                setTweet('');
                setHashtag('');
            }
        })
        .catch(error => console.error('Error al agregar tweet:', error));
    };

    return (
        <div className="container-new-tweet">
            <form className="form-column" onSubmit={handleSubmit}>
                <label htmlFor="tweetInput" className="lbl-tweet">Tweet</label>
                <input 
                    type="text" 
                    className="tweetInput" 
                    name="tweet" 
                    value={tweet} 
                    onChange={(e) => setTweet(e.target.value)} 
                />
                <label htmlFor="hashtagInput" className="lbl-hashtag"># Hashtag</label>
                <input 
                    type="text" 
                    className="hashtagInput" 
                    name="hashtag" 
                    value={hashtag} 
                    onChange={(e) => setHashtag(e.target.value)} 
                />
                <button type="submit" className="submit-button">Agregar Tweet</button>
            </form>
        </div>
    );
};

export default NewTweet;
