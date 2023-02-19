import styles from "./Navbar.module.css";

function NavbarList() {
  return (
    <div>
         <ul className={styles.containerList}>
                <li>
                    Productos
                </li>
                <li>
                    Nosotros
                </li>
                <li>
                    Contacto
                </li>
            </ul>
    </div>
  )
}

export default NavbarList
