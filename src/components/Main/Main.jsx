import { useState } from 'react';
import './Main.css';
import { Search, Tweet, TweetsList } from '../index';

const Main = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="main-container">
            <div className="section-1">
                <Search onResults={setResults} />
            </div>

            <div className="section-2">
                {results.length > 0 ? (
                    <TweetsList tweets={results} />
                ) : (
                    <Tweet /> // Muestra el componente Tweet por defecto
                )}
            </div>
        </div>
    );
};

export default Main;
