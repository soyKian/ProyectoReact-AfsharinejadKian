import { useState } from "react";
import Button from '@mui/material/Button';


const ItemCount = ({ stock, initial=1, onAdd}) => {
    const [contador, setContador] = useState(initial);


    const sumar = () =>{
        if (contador < stock){
            setContador(contador + 1);
        }
    };

    const restar = () =>{
        if (contador > 1){
            setContador(contador - 1);
        }
    };


    return (
    <div>
      
        <h2>Añadir {contador} unidad/es</h2>

        <Button variant="contained" size="medium" onClick={sumar}>Sumar</Button>
        <Button variant="contained" size="medium" onClick={restar}>Restar</Button>

        
      {/* Muestra el botón solo si el stock es mayor a 0 */}
      {stock > 0 && (
        <Button variant="contained" size="medium" onClick={ ()=> onAdd(contador)}>Agregar al carrito</Button>
      )}
      {/* Muestra el mensaje de "sin stock" si el stock es 0 */}
      {stock === 0 && (
        <h2>Sin stock</h2>
      )}
  


    </div>
  )
}

export default ItemCount
