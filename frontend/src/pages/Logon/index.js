import { Link } from 'react-router-dom'
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import cupImg from '../../assets/qatar.png';
import logoImg from '../../assets/logo.png';

export default function Logon(){
    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt="logoCup"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder='Sua ID' />
                    <button className='button' type='submit'>Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#56042C" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={cupImg} alt="qatar"/>
        </div>
    );
}