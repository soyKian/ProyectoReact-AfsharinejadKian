import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import { Link } from "react-router-dom"

function CartWidget() {
  return (
    <div>
      <AiOutlineUser size={30}/>
       
      <Link to="/cart" style={{textDecoration: "none", color:"inherit"}}> <AiOutlineShoppingCart size={30}/> </Link>
    </div>
  )
}

export default CartWidget
