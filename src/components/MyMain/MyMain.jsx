import '../Main/Main.css';
import {Search, MyTweet} from '../index'

const MyMain = () => {
    return (
        <div className="main-container">
            <div className="my-section-1">
                <Search />
            </div>

            <div className="my-section-2">
                 <h2>Mis Tweets</h2>
                 <MyTweet />
            </div>
          
        </div>
    )
}

export default MyMain