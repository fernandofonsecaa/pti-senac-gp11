import './styles.css'
import logoImg from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import { useState } from 'react'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email
        };

        try {
            const response  = await api.post('users', data);
            alert(`Seu ID de acesso: ${response.data.id}`)
            navigate("/");
        } catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt="cupLogo"></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro na plataforma e acompanhe tudo sobre a Copa do Mundo 2022</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#56042C" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}