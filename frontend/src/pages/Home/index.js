import logoImg from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom'
import { FiPower } from 'react-icons/fi';
import match1 from '../../assets/match1.png';
import group1 from '../../assets/group1.png';
import group2 from '../../assets/group2.png';

import './styles.css'

export default function Home() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    function handleLogout() {
        localStorage.clear();

        navigate("/");
    }

   return (
    <div className="home-container">
        <header>
            <img src={logoImg} alt="cupTime" />
            <span>Bem vindo, {userName}</span>
            
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#56042C" />
            </button>
        </header>

        <h1>Jogos de hoje</h1>
        <section>
            <div className="home-matchs">
                <ul>
                    <li>
                        <img src={match1} alt="jogo 1"/>
                    </li>

                    <li>
                        <img src={match1} alt="jogo 1"/>
                    </li>

                    <li>
                        <img src={match1} alt="jogo 1"/>
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
   )
}