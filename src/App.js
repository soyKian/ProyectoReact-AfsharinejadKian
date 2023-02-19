import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Prueba, Hola :)"}/>
      <Footer />
    </div>
  );
}

export default App;
