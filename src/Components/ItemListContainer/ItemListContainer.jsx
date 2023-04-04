import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { CircularProgress } from "@mui/material";
import { db } from "../../firebaseConfig";
import{collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);


  useEffect(() => {
    const itemsCollection = collection (db, "products")

    let consulta=undefined;

    if(categoryName){
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    }else{
      consulta = getDocs(itemsCollection);
    }
    
    consulta.then((res) =>{
      let products = res.docs.map((product)=>{
        return {
          ...product.data(),
          id: product.id
        }
      })

      setItems(products)
    })
  }, [categoryName]);

  if (items.length === 0) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
