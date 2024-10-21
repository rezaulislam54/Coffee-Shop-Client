import { useLoaderData } from "react-router-dom";
import ProductCart from "../components/ProductCart";

const ShopePage = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        {coffees?.map((coffee) => (
          <ProductCart key={coffee._id} coffee={coffee}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default ShopePage;
