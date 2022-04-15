import "./ItemCount.css"
import {useState} from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > initial)
        setCount(count - 1)
        }
    
    const increment = () => {
        if(count < stock)
            setCount(count + 1)
        }

        return(

            <div className="container">
                <div className="container-button">
                    <button className="button" onClick={increment}> + </button>
                        <p> {count} </p>
                    <button className="button dec" onClick={decrement}> - </button>    
                </div>
                <div className="a">
                <button onClick={ () => onAdd(count)}> Agregar al carrito </button>
                </div>
            </div>
        )    
    }

export default ItemCount;