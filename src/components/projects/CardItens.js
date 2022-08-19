import { useEffect } from 'react';
import Delete from '../layout/Delete';
import Editar from '../layout/Editar';
import style from './CardItens.module.css'

function CardItens({ index, nome, telefone, email, status, data }){

    function guardar(){
        localStorage.setItem("local", JSON.stringify(index));
        console.log(JSON.parse(localStorage.getItem("local")));
    }

    useEffect(()=> {
        data = tratarData(data);
    }, [])

    function tratarData(data){
        let novaData = data.replace("T", " ");
        novaData = novaData.split(" ");
        novaData = novaData[0].split("-");
        novaData = novaData.reverse().join("-");

        return novaData;
    }

    return (
        <div className={style.dados}>
            <div className={style.box_dados}>
                <div className={style.content_nome}>
                    <span>Nome:</span>
                    <p>{nome}</p>
                </div>
                <div className={style.content_telefone}>
                    <span>Telefone:</span>
                    <p>{telefone}</p>
                </div>
                <div className={style.content_email}>
                    <span>Email:</span>
                    <p>{email}</p>
                </div>
                <div className={style.content_status}>
                    <span>Status:</span>
                    <p>{ status ? 'Ativo' : 'Desativado' }</p>
                </div>
                <div className={style.content_data}>
                    <span>Data de Nascimento:</span>
                    <p>{tratarData(data)}</p>
                </div>
                <div className={style.editar}>
                    <div className={style.content_edit}>
                        <Delete item={index}/>
                    </div>
                    <div className={style.content_edit}>
                        <Editar func={() => guardar()} item={index}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItens;