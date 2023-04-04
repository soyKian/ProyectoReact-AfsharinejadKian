import styles from "./Navbar.module.css";

import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom"

// import { collection,getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../../firebaseConfig";


const Navbar = () => {

    // const [categoryList, setCategoryList] = useState();

    // useEffect(()=>{
    //     const itemsCollection=collection(db, "categories")

    //     getDocs(itemsCollection)
    //     .then(res=>{
    //         let arrayCategories = res.docs.map((category)=>{
    //             return{
    //                 ...category.data(),
    //                 id: category.id,
    //             };
    //         });
    //         setCategoryList(arrayCategories);
    //     })
    // },[])

    // no me parecio util usar firebase en este sector



    return(
        <div className={styles.containerNavbar}>

            <Link to="/" style={{textDecoration: "none", color:"inherit"}}> <Logo /> </Link>

            <ul className={styles.containerList}>
                <Link to="/category/arroz" style={{textDecoration: "none", color:"inherit"}} >
                    Arroz
                </Link>
                <Link to="/category/chocotransfer" style={{textDecoration: "none", color:"inherit"}}>
                    Chocotransfer
                </Link>
            </ul>

            <CartWidget />

        </div>
    )

}

export default Navbar