import style from './BtnLimpar.module.css'

function BtnLimpar({ value, text }){

    return (
        <div className={style.btn_clear}>
            <button type="submit" value={value} className={style.button}>{text}</button>
        </div>
    )
}

export default BtnLimpar;