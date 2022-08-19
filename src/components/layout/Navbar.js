import { Link } from 'react-router-dom'

import style from './Navbar.module.css'

import user from '../../imgs/user.jpg'

function Navbar(){



    return (
        <nav>
            <div>
                <p className={style.logo}>CRUD</p>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/">Recordings</Link>
                    </li>
                    <li>
                        <Link to="/contatos">Contatos</Link>
                    </li>
                    <li>
                        <Link to="/">Sobre</Link>
                    </li>
                </ul>
            </div>
            <div className={style.user}>
                <p>Pedro Alves Cabral</p>
                <img src={user} alt='logo'/>
            </div>
        </nav>
    )
}

export default Navbar;