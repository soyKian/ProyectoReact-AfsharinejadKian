import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import FormCheckout from "../FormCheckout/FormCheckout";

import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } = useContext(CartContext);
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
      <div style={{display:"flex", flexDirection:"column", transform: "translate(0px, 50%)", textAlign:"center"}}>
        <h2>Gracias por su compra</h2>
        <h4>El comprobante de su compra:</h4>
        <h4>Orden de compra "{orderId}"</h4>
        <Link to="/" style={{textDecoration: "none"}}><Button style={{backgroundColor: "#21b6ae", marginTop:"20px"}} variant="contained" size="medium">Seguir comprando</Button></Link>
      </div>
    )
  }


  return (
    <div style={{display:"flex",
    justifyContent:"center"}}>




      {!showForm ? (
        <div>
        <div>
        {cart.map((elemento) => {
          return (
      

            <div style={{paddingTop:"20px"}}key={elemento.id}>
              <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: '#3B8686'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={elemento.title} src={elemento.img}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div" color="white">
                {elemento.title}
              </Typography>
              <Typography variant="body2" gutterBottom color="white">
                {elemento.description}
              </Typography>
              <Typography variant="overline" gutterBottom color="white">
                Cantidad a comprar: {elemento.quantity}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Button style={{backgroundColor: "#21b6ae"}} variant="contained" size="medium" onClick={() => deleteProductById(elemento.id)}>Eliminar</Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" color="white">
              ${elemento.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

            </div>
          );
        })
      }
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>El precio total del carrito es: AR${precioTotal}</h3>
  
        {cart.length>0 &&(
          <div style={{justifyContent:"space-between"}}>
          <Button style={{backgroundColor: "#21b6ae"}} variant="contained" size="medium" onClick={()=>setShowForm(true)}> Terminar la compra </Button>
           <Button style={{backgroundColor: "#21b6ae"}} variant="contained" size="medium" onClick={clear}> Limpiar Carrito </Button>
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
