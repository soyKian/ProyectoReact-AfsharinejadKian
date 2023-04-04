import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import FormCheckout from "../FormCheckout/FormCheckout";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);
  const precioTotal = getTotalPrice();

  
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null)

  
  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  if(orderId){
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>el comprobante es : {orderId}</h4>
        <Link to="/"><button>Seguir comprando</button></Link>
      </div>
    )
  }


  return (
    <div>
      {!showForm ? (
        <div>
        {cart.map((elemento) => {
          return (
            <div>
              <h2>{elemento.title}</h2>
              <h2>{elemento.price}</h2>
              <h2>{elemento.quantity}</h2>
              <button onClick={() => deleteProductById(elemento.id)}>
                {" "}
                Eliminar{" "}
              </button>
            </div>
          );
        })
      }
      <div>
        <h3>El precio total del carrito es: AR${precioTotal}</h3>
  
        {cart.length>0 &&(
          <div>
          <button variant="contained" onClick={()=>setShowForm(true)}> Terminar la compra </button>
           <button onClick={clear}> Limpiar Carrito </button>
           </div>
           )}
           </div>
           </div>
           ) : (
            <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />
           ) 
      }
    </div>
  );

};

export default Cart;
