import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { getCategories } from "../../asyncmock"

const NavBar = () => {
  const [categories,setCategories] = useState([])

  useEffect(()=>{
      getCategories().then(categories =>{
          setCategories(categories)
      })
  }, [])

  return(
    //asdasdasd
       <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Tienda</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Categorias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Recomendados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar juego" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
        <div>
            <CartWidget/>
        </div>
      </nav>
        <nav>
          <div className='Categories'>
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                >{cat.description}</NavLink> )}
                </div>
        </nav>
      </div>
    
          )
}
export default NavBar