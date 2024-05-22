
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

// eslint-disable-next-line react/prop-types
const TweetsList = ({ tweets = [] }) => {
    return (
        <div>
            {tweets.map((tweet, index) => (
                <Tweet
                    key={index}
                    username={tweet.username}
                    tweet={tweet.tweet.tweet} // Ajusta esto según la estructura de tus datos
                    hashtag={tweet.tweet.hashtag} // Ajusta esto según la estructura de tus datos
                />
            ))}
        </div>
    );
};

export default TweetsList;
