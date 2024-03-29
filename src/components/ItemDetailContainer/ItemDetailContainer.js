import { useState, useEffect} from 'react';
import { getProductsById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ setCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductsById(1).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

    }, [])

    return (
        <div>
            {
                loading ?
                    <div>
                        <span className="loader"></span>
                    </div>
                    :
                product ?
                    <ItemDetail {...product}  setCart={setCart} cart={cart}/>:
                    <h1>El producto no existe</h1>
            }
            
        </div>
    )

}
export default ItemDetailContainer