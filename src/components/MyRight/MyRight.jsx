import '../Right/Right.css';
import imgProfile from '../../assets/profile.jpg';

const MyRight = () => {
    return (
        <div className="right-container">
            <div className="img-container-right">
                 <img src={imgProfile} alt="Profile" />
                 <p className="user">Nombre Usuario</p>
                 <p className="email-user">Correo</p>
            </div>

            <div className="right-container-buttons">
                <button className="btn-create-tweet">Crear Tweet</button>
                <button className="btn-other">Otros Tweets</button>
            </div>
        </div>
    )
}

export default MyRight