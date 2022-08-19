import style from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }) {

    if(type == "date"){
        value = "yyyy-mm-dd"
    }

    return (
        <div className={style.container_form}>
            <label className={style.text_label} htmlFor={name}>{text}:</label>
            <input className={style.box_input} type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></input>
        </div>
    )
}

export default Input;