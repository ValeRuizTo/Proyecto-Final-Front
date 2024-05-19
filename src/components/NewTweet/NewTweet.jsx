import './NewTweet.css'

const NewTweet = () => {

    return (
        <div className="container-new-tweet"> 
            <form className="form-column">
                <label htmlFor="tweetInput" className="lbl-tweet">Tweet</label>
                <input type="text" className="tweetInput" name="tweet" />
                <label htmlFor="hashtagInput" className="lbl-hashtag"># Hashtag</label>
                <input type="text" className="hashtagInput" name="hashtag" />
            </form>
        </div>
    )
}

export default NewTweet