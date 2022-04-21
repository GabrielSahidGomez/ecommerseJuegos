import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConstainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount.js"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} juegos`)
  }

  return (

    <>
        <NavBar />
        <div className="header">
            <h1>Tienda de Juegos</h1>
        </div>
        <ItemListConstainer greeting={"Bienvenid@ a mi tienda de juegos"}/>
        
        <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/>
        

    </>

  );

}

export default App;
