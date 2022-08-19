import style from './Delete.module.css';

import icone from '../../imgs/delete.png';

import api from "../../services/api";
import { useState } from 'react';
import Mensagem from './Mensagem';

function Delete(item){

    const [mensagem, setMensagem] = useState(false);
    const [valor, setValor] = useState();

    function refreshPage(){ 
        window.location.reload(); 
    }
    
    function deletarValor(){
        api
            .delete("https://api.box3.work/api/Contato/f35f1284-1fe8-471f-9369-faacfa560044/" + item.item)
            .then((resposta) => {
                setValor(resposta.data);
                setMensagem(true);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            })
        
    }

    return (
        <button className={style.button} onClick={() => {deletarValor(); refreshPage()}}>
            <img className={style.img} src={icone} alt="delete"/>
            {mensagem && 
                <>
                    <Mensagem texto="Contato deletado com sucesso!" tipo="sucesso"/>
                </>
            }
        </button>
    )
}

export default Delete;