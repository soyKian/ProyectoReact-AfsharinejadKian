import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CartWidget.css"
import {useContext} from "react"
import { CartContext } from "../../Context/CartContext";


const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity();

  return (
    <div>
      <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="container-cart">
          <AiOutlineShoppingCart size={30} />
          <div className="bubble-counter">
            <span>{total}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;
