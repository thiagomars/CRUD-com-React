import style from './Submit.module.css'

function Submit({ func, value }){

    return (
        <div className={style.btn_submit}>
            <input onClick={func} type="submit" value={value} className={style.input}/>
        </div>
    )
}

export default Submit;