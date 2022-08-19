import LinkButton from "../layout/LinkButton";
import TodosContato from "./TodosContato";
import AddContato from "./AddContato";

import style from './Contatos.module.css';

import { useState } from 'react';
import Mensagem from "../layout/Mensagem";


function Contatos(){

    const [verific, setVerific] = useState();

    

    return(
        <div>
            <div className={style.container}>
                <h1>Contatos</h1>
                <div className={style.menu}>
                    <button className={style.btn} onClick={() => setVerific(false)}>Todos</button>
                    <button className={style.btn} onClick={() => setVerific(true)}>Adicionar</button>
                </div>
                
            </div>
            <div>
                {verific ?  <AddContato /> : <TodosContato />}
            </div>

        </div>
    )

}

export default Contatos;