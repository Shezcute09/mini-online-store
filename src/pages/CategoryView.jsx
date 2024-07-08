import { Link } from "react-router-dom";

import Heading from "./Heading";

const CategoryView = () => {
  return (
    <div>
      <Heading />
      <div className="flex justify-center">
        <img
          className="h-full object-cover"
          src="/public/assets/apparelTitle.png"
          alt=""
        />
      </div>
      <div className="px-[13.5px] mt-[23px]">
        <button>
          <Link to="/cart">
            <img src="/public/assets/apparel1.png" alt="" />
          </Link>
        </button>
        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel2.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel3.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel4.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel5.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel6.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel7.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel7.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel8.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel9.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/public/assets/apparel10.png" alt="" />
          </Link>
        </button>
      </div>
      <div className="flex justify-center mt-[60px] mb-[80px] mx-[50.5px]">
        <img src="/public/assets/pageNumbers.png" alt="" />
      </div>
      <div>
        <img src="/public/assets/apps_contact.png" alt="" />
      </div>
    </div>
  );
};

export default CategoryView;
