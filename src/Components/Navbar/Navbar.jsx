import styles from "./Navbar.module.css";

import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom"


const Navbar = () => {
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
                <li>
                    Nosotros
                </li>
                <li>
                    Contacto
                </li>
            </ul>

            <CartWidget />

        </div>
    )

}

export default Navbar