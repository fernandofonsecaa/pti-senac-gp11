import { Link, useNavigate } from 'react-router-dom'
import './styles.css';
import { FiPower } from 'react-icons/fi';

import logoNav from '../../assets/logo-nav.jpg';
import teamsImg from '../../assets/teams.png'

export default function Teams() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();

        navigate("/");
    }
    return (
        <div>
            <nav>
                <img src={logoNav} alt="logo-nav"/>
                <ul>
                    <Link className="navOption" to="/home">Menu Principal</Link>
                    <Link className="navOption" to="/teams">Seleções</Link>
                    <Link className="navOption" to="/calendar">Calendário</Link>
                    <Link className="navOption" to="/playoffs">Resultados</Link>
                    
                    <button className="buttonLogout" onClick={handleLogout} type="button">
                    <FiPower size={18} color="#56042C" />
                </button>
                </ul>
        </nav>
            <img className="teams-img" src={teamsImg} alt="groups" />      
         </div>
        
    )

}