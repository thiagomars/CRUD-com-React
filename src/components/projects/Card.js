import style from './Card.module.css'
import CardItens from './CardItens'

import api from "../../services/api";
import { useEffect, useState } from 'react';

function Card(){

    const [aba, setAba] = useState([]);
    
    useEffect(() => {
        api
            .get("")
            .then((resposta) => {
                setAba(resposta.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            })
    }, []);

    return (
        
        <div className={style.composition}>
            
            {/* <div className={style.box_titulo}>
                <div className={style.content_nome}>
                    <h1>Nome</h1>
                </div>
                <div className={style.content_telefone}>
                    <h1>Telefone</h1>
                </div>
                <div className={style.content_email}>
                    <h1>Email</h1>
                </div>
                <div className={style.content_status}>
                    <h1>Status</h1>
                </div>
                <div className={style.content_data}>
                    <h1>Data de Nascimento</h1>
                </div>
                <div className={style.content_edit}>
                    <h1> </h1>
                </div>
            </div> */}

            {
                <div className={style.flutuar}>
                    {(aba.length > 0
                        ? aba.map((item, index) => (
                            <CardItens index={aba[index].id} key={index} nome={aba[index].nome} telefone={aba[index].telefone} email={aba[index].email} status={aba[index].ativo} data={aba[index].dataNascimento}/>
                        ))

                        :<p className={style.vazio}>
                            Nenhum contato
                        </p>
                    )}
                </div>
            }
        </div>
    )
}

export default Card;