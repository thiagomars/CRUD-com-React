import style from './AddContato.module.css'
import FormularioAdd from '../projects/FormularioAdd'

function AddContato(){

    

    return(
        <div className={style.container}>
            <h3>Adicionar Contato</h3>
            <p className={style.opc}>* Preencha todos os campos.</p> 
            <div className={style.container_menor}>
                <FormularioAdd />
            </div>
        </div>
    )
}

export default AddContato;