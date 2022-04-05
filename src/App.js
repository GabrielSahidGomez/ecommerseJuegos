import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConstainer from "./components/ItemListContainer/ItemListcontainer";
function App() {

  return (

    <>
        <div className="header">
            <h1>Tienda de Juegos</h1>
        </div>
        <ItemListConstainer greeting={"Bienvenid@ a mi tienda de juegos"}/>

        <NavBar />
        


    </>

  );

}

export default App;
