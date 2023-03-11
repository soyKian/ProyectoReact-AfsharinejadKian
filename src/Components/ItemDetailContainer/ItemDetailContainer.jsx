import React from 'react'
import {useParams} from "react-router-dom"
import {products} from "../../productsMock"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer = () => {
    
    const {id} = useParams()

    const productSelected = products.find((element) => element.id === Number(id));

    const onAdd = (cantidad)=>{
    }


  return (

    <div style={{justifyContent:"space-evenly", textAlign:"center", marginTop:15}}>
        
      <img style={{ width:400}}src={productSelected.img}></img>  
      <h1>{productSelected.title}</h1>   
      <h1>{productSelected.description}</h1>
      <h1>AR${productSelected.price}</h1>

        <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer
