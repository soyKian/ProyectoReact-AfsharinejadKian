import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {

    const { cart, clearCart, getTotalPrice } = useContext(CartContext)
    const precioTotal = getTotalPrice()


    console.log(cart);
  return (
    <div>
      {
        cart.map( (elemento)=> {
            return <div>
                <h2>{elemento.title}</h2>
                <h2>{elemento.price}</h2>
                <h2>{elemento.quantity}</h2>
                <h3>El precio total del carrito es: AR${precioTotal}</h3>
                </div>
        } )
      }

      <button onClick={clearCart}> Limpiar Carrito </button>

    </div>
  )
}

export default Cart
