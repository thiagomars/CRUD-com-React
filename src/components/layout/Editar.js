import style from './Editar.module.css';

import edit from '../../imgs/edit.png'
import { Link } from 'react-router-dom';

function Editar({ func} ){
    
    return (
        <Link to="/alterar">
            <button className={style.button} onClick={func}>
                <img className={style.img} src={edit} alt="alterar"/>
            </button>
        </Link>
    )
}

export default Editar;