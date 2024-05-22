import React, { useState } from 'react';
import { Search, NewTweet } from '../index';
import './NewMain.css';

const NewMain = () => {

    return (
        <div className="main-container">
            <div className="new-section-1">
                <Search />
            </div>

            <div className="new-section-2">
                <NewTweet />
            </div>
          
        </div>
    );
};

export default NewMain;