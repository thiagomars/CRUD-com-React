import style from "./Select.module.css"

function Select({ text, name }){
    return(
        <div className={style.container_form}>
            <label className={style.text_label}>{text}:</label>
            <select name={name} className={style.select}>
                <option value="1" className={style.option}>Selecionar...</option>
                <option value="2" className={style.option}>Ativo</option>
                <option value="3" className={style.option}>Desativado</option>
            </select>
        </div>
    )
}

export default Select;