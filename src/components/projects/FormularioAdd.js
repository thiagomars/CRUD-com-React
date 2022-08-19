import Input from '../forms/Input'
import Select from '../forms/Select'
import Submit from '../forms/Submit'
import BtnLimpar from '../forms/BtnLimpar'


import api from "../../services/api";

import {  useState } from 'react';

import style from './FormularioAdd.module.css';

function FormularioAdd(){


    const [nome, setNome] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState(true);
    const [nascimento, setNascimento] = useState();

    function refreshPage(){ 
        window.location.reload(); 
    }

    function enviar(e){
        e.preventDefault();
            api
                .post("https://api.box3.work/api/Contato/f35f1284-1fe8-471f-9369-faacfa560044",{
                    "nome": nome,
                    "telefone": telefone,
                    "email": email,
                    "ativo": status,
                    "dataNascimento": nascimento
                })
                .then((response) => {
                    refreshPage();
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });

        e.returnValue = true;
    }

    return (
        <form className={style.container_form}>
            
            <Input handleOnChange={(e) => setNome(e.target.value)} type="text" text="Nome Completo" name="nome" placeholder="Insira seu nome completo"/>
            <Input handleOnChange={(e) => setTelefone(e.target.value)} type="tel" text="Telefone" name="telefone" placeholder="(XX) 9YYYY-YYYY"/>
            <Input handleOnChange={(e) => setEmail(e.target.value)} type="email" text="Email" name="email" placeholder="endereco@crud.com"/>
            
            <Select text="Status" name="status"/>

            <Input handleOnChange={(e) => setNascimento(e.target.value)} type="date" text="Data de Nascimento" name="nascimento" placeholder="Data de Nascimento"/>
            
            <div className={style.linha}>
                <Submit func={(e) => enviar(e)} value="Adicionar"/> 
                <BtnLimpar value="clear" text="Limpar Campos"/>
            </div>
        </form>
    )
}

export default FormularioAdd;