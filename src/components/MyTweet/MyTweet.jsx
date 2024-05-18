import '../Tweet/Tweet.css'

const MyTweet = () => {

    return (
        <div className="container-tweet"> 
            <div className="white-container-tweet">
                <p className="user">Nombre usuario</p>
                <p className="text-tweet">Tweet</p>
                <p className="text-hashtag"># HashTag</p>
            </div>
            <div className="purple-container-tweet">
                <p className="edit">🖍</p>
                <p className="delete">🗑</p>
            </div>
        </div>
    )
}

export default MyTweet