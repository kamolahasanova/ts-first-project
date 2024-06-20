import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product, newObj,  } from "../utils/interface";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [productAmount, setProductAmount] = useState(1);
  const SetAmount = (type: string) => {
    if (type == "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type == "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((req) => req.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const addToBag = () => {
    const newProduct: newObj = {
      ...product,
      amount: productAmount,
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <>
      {product && (
        <div className="align-text flex flex-col gap-5 items-start ">
          <h1 className="text-4xl">
            Product Name:
            <span className="  text-gray-800 font-bold ">{product.title}</span>
          </h1>

          <div className="carousel carousel-center max-w-4xl mx-auto p-4 space-x-4 bg-neutral rounded-box">
            {product.images.map((img) => {
              return (
                <div
                  className="carousel-item border  border-gray-600 "
                  key={img}
                >
                  <img src={img} className="rounded-box h-96" />
                </div>
              );
            })}
          </div>

          <p className=" max-w-full">
            <span className=" font-bold">Description:</span>
            {product.description}
          </p>
          <p>
            <span className="font-bold">Price:</span>$ {product.price}
          </p>
          <div>
            <button
              onClick={() => SetAmount("decrease")}
              className="btn btn-circle"
              disabled={productAmount == 1 ? true : false}
            >
              -
            </button>
            <span className=" px-3">{productAmount}</span>
            <button
              onClick={() => SetAmount("increase")}
              className="btn btn-circle"
            >
              +
            </button>
          </div>
          <button onClick={addToBag} className="btn btn-success w-full">
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
