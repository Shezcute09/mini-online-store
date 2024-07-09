import { Link } from "react-router-dom";

const CheckOut_one = () => {
  return (
    <button>
      <Link to="/checkout_two">
        <img src="/assets/Checkout.jpg" alt="" />
      </Link>
    </button>
  );
};

export default CheckOut_one;
