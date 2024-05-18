import './Main.css';
import {Search, Tweet} from '../index'

const Main = () => {
    return (
        <div className="main-container">
            <div className="section-1">
                <Search />
            </div>

            <div className="section-2">
                 <Tweet />
            </div>
          
        </div>
    )
}

export default Main