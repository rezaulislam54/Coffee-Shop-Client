import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContexProvider";
import ProductCart from "../components/ProductCart";
import { useNavigation } from "react-router-dom";
import Spinar from "../components/Spinar";

const MyAddedCoffee = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [products, setproducts] = useState([]);
  const [items, setitems] = useState([]);
  const url = `http://localhost:5000/coffees?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  }, []);

  useEffect(() => {
    const result = products?.filter((p) => p.email === user?.email);
    setitems(result);
  }, [products, user]);

  if (navigation.state === "loading") return <Spinar />;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6 my-9">
      {items?.map((b) => (
        <ProductCart
          delatable={true}
          key={b._id}
          items={items}
          setitems={setitems}
          coffee={b}
        ></ProductCart>
      ))}
    </div>
  );
};

export default MyAddedCoffee;
