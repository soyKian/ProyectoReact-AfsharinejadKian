import styles from "./Navbar.module.css";

import CartWidget from "./CartWidget";
import Logo from "./Logo";
import NavbarList from "./NavbarList";

const Navbar = () => {
    return(
        <div className={styles.containerNavbar}>
            <Logo />
            <NavbarList />
            <CartWidget />
        </div>
    )

}

export default Navbar