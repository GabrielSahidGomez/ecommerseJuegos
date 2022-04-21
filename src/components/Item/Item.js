import './Item.css'

const Item = ({name, img, id, price}) => {
    return (
        <div className='flex-items'>

        <section>
            <picture>
                <img className='tamañoimg'src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <h2>Precio: {price}</h2>
            <button className='css-button-sliding-to-top--green'>Ver detalle</button>
        </section>
        </div>
    )

}
export default Item