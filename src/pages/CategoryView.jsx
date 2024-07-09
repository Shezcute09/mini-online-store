import { Link } from "react-router-dom";

import Heading from "./Heading";

const CategoryView = () => {
  return (
    <div>
      <Heading />
      <div className="flex justify-center">
        <img
          className="h-full object-cover"
          src="/assets/apparelTitle.png"
          alt=""
        />
      </div>
      <div className="px-[13.5px] mt-[23px]">
        <button>
          <Link to="/cart">
            <img src="/assets/apparel1.png" alt="" />
          </Link>
        </button>
        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel2.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel3.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel4.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel5.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel6.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel7.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel7.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel8.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel9.png" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/cart">
            {" "}
            <img src="/assets/apparel10.png" alt="" />
          </Link>
        </button>
      </div>
      <div className="flex justify-center mt-[60px] mb-[80px] mx-[50.5px]">
        <img src="/assets/pageNumbers.png" alt="" />
      </div>
      <div>
        <img src="/assets/apps_contact.png" alt="" />
      </div>
    </div>
  );
};

export default CategoryView;
