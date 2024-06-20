import { useEffect, useState } from "react";
import { Product, Products } from "../utils/interface";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState<Products | null>(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => {
        return data.json();
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);

  const handleDalete = (id: number) => {
    if (products) {
      const result: any = products?.products.filter((prod: Product) => {
        return prod.id !== id;
      });
      setProducts({ ...products, products: result });
    }
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products &&
        products.products.map((product: Product) => {
          return (
            <div key={product.id} className="card w-96 bg-base-300 shadow-xl  ">
              <figure className=" border-b-2 border-orange-300">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className=" border-red-50"
                />
              </figure>
              <div className=" card-body">
                <h2 className=" card-title">{product.title}</h2>
                <p>{product.description.substring(0, 100)}...</p>
                <div className="card-actions justify-between mt-5">
                  <button
                    className="btn btn-warning hover:btn-error"
                    onClick={() => handleDalete(product.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-outline"
                    to={`/product/${product.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductsList;
