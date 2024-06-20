import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <div className=" align-text  ">
      <h1 className=" text-center text-6xl my-6 text-gray-700 font-bold">
        All Products
      </h1>
      <ProductsList />
    </div>
  );
}

export default Home;
