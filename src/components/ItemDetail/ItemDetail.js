import "./ItemDetail.css"

const ItemDetail = ({ title, category, price, description, pictureUrl}) =>{
       
    return (
            <div className='container-product'>
                <h1 className="title"> Hola</h1>
                <picture className='sombra'>
                    <img className="responsive" src={pictureUrl} alt={title}/>
                </picture>
                <p>{title} por ${price}</p>
                <p className="text">{description}</p>
                <p className="card-text">categoria: {category}</p>
            </div>
            )
}
export default ItemDetail