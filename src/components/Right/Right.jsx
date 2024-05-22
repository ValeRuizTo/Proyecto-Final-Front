import {Perfil} from '../index';
import { Link } from 'react-router-dom';
import './Right.css';

const Right = () => {

    return (
        <div className="right-container">
            <Perfil/>

            <div className="right-container-buttons">
                <Link to="/new" className="btn-create-tweet">Crear Tweet</Link>
                <Link to="/my" className="btn-my">Mis Tweets</Link>
            </div>
        </div>
    );
}

export default Right;
