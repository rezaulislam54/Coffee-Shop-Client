import { Link, useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";
import { useState } from "react";

const OurPopularProduct = () => {
  const loadedCoffees = useLoaderData();

  const [coffees, setcoffees] = useState(loadedCoffees);
  const [coffeelength, setcoffeelength] = useState(6);

  return (
    <div className="my-24">
      <div className="text-center">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-3xl font-medium my-3 ">Our Popular Products</h2>
        <Link
          to={"/add-coffe"}
          className="px-4 py-2 border border-black bg-[#E3B577] w-fit mx-auto text-white text-xl rounded-md"
        >
          Add Coffee
          <img
            className="inline-block ml-3"
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728145178/Vector_ijupfw.png"
            alt=""
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-8 gap-6">
        {coffees?.slice(0 - coffeelength)?.map((coffee) => (
          <ProductCart
            key={coffee._id}
            setcoffees={setcoffees}
            coffee={coffee}
            coffees={coffees}
          ></ProductCart>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => setcoffeelength(coffees.length)}
          className={`text-white bg-blue-500 px-4 py-2 font-semibold rounded-md ${
            coffeelength === coffees.length && "hidden"
          }`}
        >
          Show All Product
        </button>
      </div>
    </div>
  );
};

export default OurPopularProduct;
