import React, { useState } from 'react';
import './Main.css';
import { Search, Tweet, TweetsList } from '../index';

const Main = () => {
    const [results, setResults] = useState([]);

    const resetResults = () => {
        setResults([]);
    };

    return (
        <div className="main-container">
            <div className="section-1">
                <Search onResults={setResults} onResetResults={resetResults} />
            </div>

            <div className="section-2">
                {results.length > 0 ? (
                    <TweetsList tweets={results} />
                ) : (
                    <Tweet />
                )}
            </div>
        </div>
    );
};

export default Main;
