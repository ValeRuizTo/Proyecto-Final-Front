import './Header.css';
import imgLogo from '../../assets/logo.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate(); 

    const { authStatus, signOut } = useContext(AuthContext);

    const handleLogout = async () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        signOut();
        window.location.href = "/";
    };

    const handleLogoClick = () => {
        navigate('/tweets'); // Redirigir a /tweets al hacer clic en el logo
    };

    return (
        <div className="header-container">
            <div className="img-container" onClick={handleLogoClick}> 
                <img src={imgLogo} alt="Logo" />
                <h1>socialGarden</h1>
            </div>
            <button className="btn-home" onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Header;