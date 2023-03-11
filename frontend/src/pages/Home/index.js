import logoImg from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi';
import match1 from '../../assets/match1.png';
import match2 from '../../assets/match2.png';
import match3 from '../../assets/match3.png';
import match4 from '../../assets/match4.png';
import group1 from '../../assets/group1.png';
import group2 from '../../assets/group2.png';
import logoNav from '../../assets/logo-nav.jpg';

import './styles.css'

export default function Home() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    function handleLogout() {
        localStorage.clear();

        navigate("/");
    }

   return (
    <div>
        <div>
        <nav>
            <img src={logoNav} alt="logo-nav"/>
            <ul>
                <ul>
                    <Link className="navOption" to="/home">Menu Principal</Link>
                    <Link className="navOption" to="/teams">Seleções</Link>
                    <Link className="navOption" to="/calendar">Calendário</Link>
                    <Link className="navOption" to="/playoffs">Resultados</Link>
                </ul>
                <button className="buttonLogout" onClick={handleLogout} type="button">
                    <FiPower size={18} color="#56042C" />
                </button>
            </ul>
        </nav>
    </div>
    <div className="home-container">
        
        <header>
            <img src={logoImg} alt="cupTime" />
            <span>Bem vindo, {userName}</span>
            
        </header>

        <h1>Jogos de hoje</h1>
        <section>
            <div className="home-matchs">
                <ul>
                    <li>
                        <img src={match1} alt="jogo 1"/>
                    </li>

                    <li>
                        <img src={match2} alt="jogo 1"/>
                    </li>

                    <li>
                        <img src={match3} alt="jogo 1"/>
                    </li>
                    <li>
                        <img src={match4} alt="jogo 1"/>
                    </li>
                </ul>

            </div>

            <div className="home-groups">
                <ul>
                    <li>
                        <img src={group1} alt="jogo 1"/>
                    </li>

                    <li>
                        <img src={group2} alt="jogo 1"/>
                    </li>
                </ul>
            </div>
        </section>
        
        
    </div>
    </div>
    
   )
}