import { Link, useNavigate } from 'react-router-dom'
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import { useState } from 'react'

import api from '../../services/api'

import cupImg from '../../assets/copa.png';
import logoImg from '../../assets/logo.png';

export default function Logon(){
    const [id, setId] = useState('')
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('userId', id);
            localStorage.setItem('userName', response.data.name);

            navigate("/home");
        
        } catch(err) {
            alert('Falha no login, tente novamente')
        }

    }

    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt="logoCup"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder='Sua ID'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className='button' type='submit'>Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#56042C" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img className='home-img' src={cupImg} alt="qatar"/>
        </div>
    );
}