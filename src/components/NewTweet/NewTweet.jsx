import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './NewTweet.css';

const NewTweet = () => {
    const [tweet, setTweet] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [tweetError, setTweetError] = useState(false);
    const [success, setSuccess] = useState(false); // Nuevo estado para el éxito de la acción

    const handleSubmit = (event) => {
        event.preventDefault();

        // Verificar si el tweet está vacío
        if (tweet.trim() === '') {
            setTweetError(true);
        } else {
            setTweetError(false);
        }

        // Si el hashtag está vacío, establecerlo como '#socialgarden' por defecto
        const finalHashtag = hashtag.trim() === '' ? '#socialGarden' : hashtag;

        // Si ambos campos no están vacíos, enviar el tweet
        if (tweet.trim() !== '') {
            enviarTweet(finalHashtag);
        }
    };

    const enviarTweet = (finalHashtag) => {
        // Recuperar el token de localStorage
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');

        // Hacer la solicitud POST a la API con el token de autorización
        fetch('https://api-proyecto-beryl.vercel.app/newtweet', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: tweet,
                hashtag: finalHashtag, // Usar el hashtag final
                username: username
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
                setSuccess(true); // Establecer el éxito como verdadero
            }
        })
        .catch(error => console.error('Error al agregar tweet:', error));
    };

    return (
        <div className="container-new-tweet">
            {success ? ( // Si la acción fue exitosa, redirigir automáticamente a /success
                <Link to="/success" />
            ) : (
                <form className="form-column" onSubmit={handleSubmit}>
                    <label htmlFor="tweetInput" className={tweetError ? 'label-error' : 'lbl-tweet'}>{tweetError ? 'Campo vacío' : 'Tweet'}</label>
                    <input 
                        type="text" 
                        className={tweetError ? 'error' : 'tweetInput'} 
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
                    <button type="submit" className="btn-save">Guardar</button>
                </form>
            )}
        </div>
    );
};

export default NewTweet;