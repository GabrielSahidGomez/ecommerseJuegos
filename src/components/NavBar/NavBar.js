import "./NavBar.css"
import CartWidget from "../CartWidged/CartWidged"

const NavBar = () => {
    return(
        <nav>
            <a href="/tienda">Tienda</a>
            <a href="/categorias">Categorias</a>
            <a href="/noticias">Noticias</a>
            <a href="/destacados">Destacados</a>
            <a href="/contacto">Contacto</a>
            <div className="animation start-home"></div>  
            <div className="header">
            <h1>Tienda de Juegos</h1>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default NavBar