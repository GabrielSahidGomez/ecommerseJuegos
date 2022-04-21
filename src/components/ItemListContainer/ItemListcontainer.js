import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListConstainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    }, [])



    return(
        <div>
            <h1>{props.getProducts}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListConstainer