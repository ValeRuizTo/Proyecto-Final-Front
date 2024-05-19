import './Header.css';
import imgLogo from '../../assets/logo.jpg';
import { useContext } from 'react';
import { AuthContext} from '../../contexts/AuthContext';

const Header  = () => {

    const { authStatus, signOut } = useContext(AuthContext);

    const handleLogout = async () => {
        localStorage.setItem("username", "");
        signOut();
        window.location.href = "/";
    };
        

    return (
        <div className="header-container">
            <div className="img-container">
                    <img src={imgLogo} alt="Logo" />
                    <h1>socialGarden</h1>
            </div>
            <button className="btn-home" onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Header