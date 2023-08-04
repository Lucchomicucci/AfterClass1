import { useState } from "react"
import Item from '../../components/item'

const ItemListContainer = () => {
    // State de array con la lista de compras:
    const [listaDeCompras, setListaDeCompras] = useState([])

    // Valor del input
    const [input, setInput] = useState('')

    const addItem = () => {
        if(input !== ''){ // Aca preguntamos si el input es distinto de un string vacio para evitar agregar items vacios a la lista

            // Seteamos el estado con el valor que tenia (Es decir, todos los items) y agregamos el valor que ingreso el usuario por input
            setListaDeCompras([...listaDeCompras, input])

            // Limpiamos el valor del input para que no quede cargado con lo anterior
            setInput('')
        }
    }

    const deleteItem = (nombre) => {
        // Creamos una nueva constante para guardar el array filtrandolo para que me traiga todos menos el nombre del cual le dije que queria borrar
        const nuevaListaDeCompras = listaDeCompras.filter(pr => pr !== nombre)

        // Seteamos el estado con este nuevo array que excluye el que borre
        setListaDeCompras(nuevaListaDeCompras)
    }

    return(
        <div>  
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}>Guardar</button>
            {
                listaDeCompras.length > 0 ? ( // Preguntamos si el array tiene algo 
                    <>
                    {/* Por cada item generamos un componente Item pasandole por prop el nombre y la funcion de borrado */}
                    {listaDeCompras.map(producto => <Item nombre={producto} deleteItem={deleteItem} />)} 
                    </>
                ) : ( // Si no tiene nada mostramos el texto de abajo:
                    <p>No hay nada en la lista</p>
                )
            }
        </div>
    )
}

export default ItemListContainer