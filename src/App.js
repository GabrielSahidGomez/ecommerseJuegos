import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConstainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (

    <div className="App">
        <div className="header">
            <h1>Tienda de Juegos</h1>
        </div>
      <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path='/category/:categoryId' element={<ItemListConstainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          
          </Routes>
      </BrowserRouter>
      </div>
  );

}

export default App;
