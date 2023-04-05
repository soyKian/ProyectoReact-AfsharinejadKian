import React, { useState } from "react";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product
    });
  };

  return (
    <div>
      <form style={{display:"flex", flexDirection:"column", transform: "translate(0px, 30%)"}} onSubmit={handleSubmit}>
        <h1>Ingrese sus datos para finalizar la compra :)</h1>
      <TextField
        style={{marginTop:"20px"}}
          required
          id="outlined-required"
          label="Required"
          placeholder="Nombre"
          
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />

        <TextField
        style={{marginTop:"20px"}}
          required
          id="outlined-required"
          label="Required"
          placeholder="Email"
          
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        <TextField
        style={{marginTop:"20px"}}
          required
          id="outlined-required"
          label="Required"
          placeholder="Telefono"
          
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />


        <Button style={{backgroundColor: "#21b6ae", marginTop:"20px"}} variant="contained" size="medium" type="submit">Comprar</Button>
      </form>
    </div>
  );
};

export default FormCheckout;