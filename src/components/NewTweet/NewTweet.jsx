import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewTweet.css';

const NewTweet = () => {
    const [tweet, setTweet] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [tweetError, setTweetError] = useState(false);
    const [success, setSuccess] = useState(false); 
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Verificar si el tweet está vacío
        if (tweet.trim() === '') {
            setTweetError(true);
        } else {
            setTweetError(false);
        }

        const finalHashtag = hashtag.trim() === '' ? '#socialGarden' : hashtag;

        if (tweet.trim() !== '') {
            enviarTweet(finalHashtag);
        }
    };

    const enviarTweet = (finalHashtag) => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');

        fetch('https://api-proyecto-beryl.vercel.app/newtweet', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: tweet,
                hashtag: finalHashtag,
                username: username
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error al agregar tweet:', data.error);
            } else {
                console.log('Tweet agregado correctamente:', data);
                // Limpiar inputs
                setTweet('');
                setHashtag('');
                setSuccess(true);
            }
        })
        .catch(error => console.error('Error al agregar tweet:', error));
    };

    // Si success es true, redirige a /success
    if (success) {
        navigate('/success');
    }

    return (
        <div className="container-new-tweet">
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
        </div>
    );
};

export default NewTweet;