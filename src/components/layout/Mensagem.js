import { useEffect, useState } from 'react';
import style from './Mensagem.module.css'

function Mensagem({ tipo, texto }){

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(!texto){
            setVisible(false);
            return;
        }

        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000)

        return () => clearTimeout(timer);

    }, [texto])

    return (
        <>
            {visible && (
                <div className={`${style.mensagem} ${style[tipo]}`}>
                    <p>{texto}</p>
                </div>
            )}
        </>
    )
}

export default Mensagem;