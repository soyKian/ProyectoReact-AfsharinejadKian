import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");

    const ref = doc(itemCollection, id);

    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);
  // const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto se añadió al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let quantity = getQuantityById(Number(id));

  return (
    <div
      style={{
        justifyContent: "space-evenly",
        textAlign: "center",
        marginTop: 15,
      }}
    >
      <img style={{ width: 400 }} src={productSelected.img}></img>
      <h1>{productSelected.title}</h1>
      <h1>{productSelected.description}</h1>
      <h1>AR${productSelected.price}</h1>

      <ItemCount
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={quantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
