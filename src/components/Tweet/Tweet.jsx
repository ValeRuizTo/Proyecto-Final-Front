import './Tweet.css'

const Tweet = () => {

    return (
        <div className="container-tweet"> 
            <div className="white-container-tweet">
                <p className="user">Nombre usuario</p>
                <p className="text-tweet">Tweet</p>
                <p className="text-hashtag"># HashTag</p>
            </div>
            <div className="purple-container-tweet">
                <h1>♡</h1>
            </div>
        </div>
    )
}

export default Tweet