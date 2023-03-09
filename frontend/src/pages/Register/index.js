import './styles.css'
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function Register() {
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

                <form>
                    <input placeholder="Nome" />
                    <input type="email" placeholder="E-mail" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}