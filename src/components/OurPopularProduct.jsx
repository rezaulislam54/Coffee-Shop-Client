import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

const OurPopularProduct = () => {
  const coffees = useLoaderData();
  return (
    <div className="my-24">
      <div className="text-center">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-3xl font-medium my-3 ">Our Popular Products</h2>
        <h2 className="px-4 py-2 border border-black bg-[#E3B577] w-fit mx-auto text-white text-xl rounded-md">
          Add Coffee
          <img
            className="inline-block ml-3"
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728145178/Vector_ijupfw.png"
            alt=""
          />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto mt-8 gap-6">
        {coffees?.map((coffee) => (
          <ProductCart key={coffee._id} coffee={coffee}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default OurPopularProduct;
