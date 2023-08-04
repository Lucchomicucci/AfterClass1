import { useState } from 'react'
import styles from './styles.module.css'

export const Item = ({nombre, deleteItem}) => {

    // Estado para ver si el item se encuentra marcado o no
    const [marcado, setMarcado] = useState(false)

    return(
        <div className={marcado ? styles['contenedor-marcado'] : styles['contenedor']}>
            <p>{nombre}</p>

            <button onClick={() => deleteItem(nombre)}>Borrar</button> 

            <button onClick={() => setMarcado(!marcado)}>
                {marcado ? 'Desmarcar' : 'Marcar'}
            </button>
        </div>
    )
}

export default Item