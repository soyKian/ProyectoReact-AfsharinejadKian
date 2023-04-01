import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + producto.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {

    return cart.reduce( (acc, elemento)=>{
      return acc + elemento.quantity
    } , 0 )

  };

  const getQuantityById = (id)=>{

    const productSelected = cart.find( (element)=> element.id === id)
    return productSelected?.quantity

  }

  const getTotalPrice = () => {
    let precioTotal = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return precioTotal;
  };

  let data = {
    cart,
    getTotalQuantity,
    agregarAlCarrito,
    getQuantityById,
    clearCart,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
