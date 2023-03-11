import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    
    
    <BrowserRouter>

    <Navbar/>

      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/category/:categoryName" element={ <ItemListContainer/> } />
        <Route path="/item/:id" element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={ <h1>Carrito</h1> } />
        <Route path="*" element={ <h1>Error 404 not found</h1> } />

      </Routes>  

    <Footer/>

    </BrowserRouter>
    
    // <div>
    //   <Navbar />
    //   <ItemListContainer greeting={"Prueba, Hola :)"}/>
    //   <Footer />
    // </div>
  );
}

export default App;
