import { useState , useEffect} from "react"
import "./ItemDetail.css"

const ItemDetail = ({id, name, img, category, description, price}) => {
    

    const { addItem } = useState()

    const handleAdd = (count) => {
    
        const objProd = {
            id, name, price, description
        }

        addItem(objProd)
        
    }
    
    return (
        <div className="col">
        <div className="card mt-2">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria: {category}</p>
            <p className="text">Descripcion: {description}</p>
            <p className="card-text">Precio: ${price}</p>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail