import style from './Alterar.module.css'

import Input from '../forms/Input'
import Select from '../forms/Select'
import Submit from '../forms/Submit'

import api from "../../services/api";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Alterar(){

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(true);
    const [nascimento, setNascimento] = useState("");

    const [aux, setAux] = useState(false);

    const [aba, setAba] = useState([]);

    useEffect(() => {
        api
            .get("https://api.box3.work/api/Contato/f35f1284-1fe8-471f-9369-faacfa560044/" + JSON.parse(localStorage.getItem('local')))
            .then((resposta) => {
                setAba(resposta.data);
                <Link to="/contatos"/>
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            })
            
    }, []);

    useEffect(() => {
        setNome(aba.nome);
        setEmail(aba.email);
        setTelefone(aba.telefone);
        setStatus(aba.ativo);
        setNascimento(aba.dataNascimento);
    }, [aba])

    function alterar(e){
            api
                .put("https://api.box3.work/api/Contato/f35f1284-1fe8-471f-9369-faacfa560044/" + JSON.parse(localStorage.getItem('local')),{
                    "nome": nome,
                    "telefone": telefone,
                    "email": email,
                    "ativo": status,
                    "dataNascimento": nascimento
                })
                .then((response) => {
                    
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });

        e.returnValue = true;
        
    }

    return (
        <form className={style.container_form}>
            <h2 className={style.title}>Alterar dados</h2>
            <div>
                <Input handleOnChange={(e) => setNome(e.target.value)} type="text" text="Nome Completo" name="nome" value={nome}/>
                <Input handleOnChange={(e) => setTelefone(e.target.value)} type="tel" text="Telefone" name="telefone" value={telefone}/>
                <Input handleOnChange={(e) => setEmail(e.target.value)} type="email" text="Email" name="email" value={email}/>
                <Select text="Status" name="status" />
                <Input handleOnChange={(e) => setNascimento(e.target.value)} type="text" text="Data de Nascimento" name="nascimento" value={nascimento} />
                <div className={style.linha}>
                    <Link to="/contatos">
                        <Submit value="Salvar" func={(e) => alterar(e)}/>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default Alterar;