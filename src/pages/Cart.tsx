import { useDispatch, useSelector } from "react-redux";
import { Product } from "../utils/interface";
import { FaTrash } from "react-icons/fa";
import { removeProduct } from "../features/productSlice";
function Cart() {
  const { products } = useSelector((state:any) => state.products);
  const dispatch = useDispatch();
  if (products.length == 0) {
    return <h1 className="align-text">hech qanday mahsulot yo'q ):</h1>;
  }
  return (
    <div className="align-text">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Discription</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => {
            return (
              <tr key={product.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.thumbnail} alt={product.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {product.description.substring(0, 100)}...
                  </span>
                </td>
                <td>
                  {new Intl.NumberFormat("us-US", {
                    currency: "USD",
                    style: "currency",
                  }).format(product.price * product.amount)}
                </td>
                <th>
                  <button
                    onClick={() => dispatch(removeProduct(product.id))}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
