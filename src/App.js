import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h1>Error 404 not found</h1>} />
        </Routes>

        <Footer />
      </CartContextProvider>
    </BrowserRouter>

    // <div>
    //   <Navbar />
    //   <ItemListContainer greeting={"Prueba, Hola :)"}/>
    //   <Footer />
    // </div>
  );
}

export default App;
