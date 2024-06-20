import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector((state:any) => state.products);

  return (
    <div className="   bg-gray-400">
      <div className="navbar align-text">
        <div className=" navbar-start">
          <Link className="btn btn-neutral text-gray-200" to="/">
            Home
          </Link>
        </div>
        <div className=" navbar-center">Links</div>
        <div className=" navbar-end">
          <Link to="/cart">
            <div className=" indicator cursor-pointer group">
              <span className=" indicator-item badge badge-success group-hover:badge-info text-gray-200">
                {amount}
              </span>
              <MdShoppingCart className=" w-7 h-7 text-info group-hover:text-success transition duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
