import './Item.css'

const Item = ({name, img, id}) => {
    return (
        <div className='container'>

        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <button className='css-button-sliding-to-top--green'>Ver detalle</button>
        </section>
        </div>
    )

}
export default Item