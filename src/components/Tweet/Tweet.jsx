import  { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Tweet = ({ username, tweet, hashtag }) => {
    return (
        <div className="container-tweet"> 
            <div className="white-container-tweet">
                <p className="user">{username}</p>
                <p className="text-tweet">{tweet}</p>
                <p className="text-hashtag">{hashtag}</p>
            </div>
            <div className="purple-container-tweet">
                <p>♡</p>
            </div>
        </div>
    );
};

const TweetsList = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        // Recuperar el token de localStorage
        const token = localStorage.getItem('token');

        // Hacer la solicitud GET a la API con el token de autorización
        fetch('https://api-proyecto-beryl.vercel.app/tweets', {
            headers: {
                'Authorization': token // Incluye el token en el encabezado de autorización
            }
        })
        .then(response => response.json())
        .then(data => setTweets(data))
        .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    return (
        <div>
            {tweets.map((tweet, index) => (
                <Tweet
                    key={index}
                    username={tweet.username}
                    tweet={tweet.tweet}
                    hashtag={tweet.hashtag}
                />
            ))}
        </div>
    );
};

export default TweetsList;
