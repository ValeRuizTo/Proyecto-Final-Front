import React, { useState } from 'react';
import { Search, NewTweet } from '../index';
import './NewMain.css';

const NewMain = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSave = () => {
        setUsernameError(username.trim() === '');
        setPasswordError(password.trim() === '');
    };

    return (
        <div className="main-container">
            <div className="new-section-1">
                <Search />
            </div>

            <div className="new-section-2">
                <NewTweet />
                <button className="btn-save" onClick={handleSave}>Guardar</button>
            </div>
          
        </div>
    );
};

export default NewMain;