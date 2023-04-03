import { useState, useEffect } from "react";
import Button from '@mui/material/Button';


const ItemCount = ({ stock, initial=1, onAdd}) => {
    const [contador, setContador] = useState(initial);

    // useEffect(()=>{
    //     setContador(initial)
    // }, [initial]);

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
      
        <h2>{contador}</h2>

        <Button variant="contained" size="medium" onClick={sumar}>Sumar</Button>
        <Button variant="contained" size="medium" onClick={restar}>Restar</Button>
        <Button variant="contained" size="medium" onClick={ ()=> onAdd(contador)}> Agregar al carrito </Button>

    </div>
  )
}

export default ItemCount
