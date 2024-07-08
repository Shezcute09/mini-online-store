import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Link to="/checkout_one">
        <img src="/public/assets/Cart.jpg" alt="" />
      </Link>
    </div>
  );
};

export default Cart;
