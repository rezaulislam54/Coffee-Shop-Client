import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthContexProvider";

const CartProduct = ({ product, setmyproducts, myproducts }) => {
  const { _id, name, supplier, price, Photo } = product;

  const { setquantity, setproprice } = useContext(AuthContext);
  const [totalquantity, settotalquantity] = useState(1);

  const handlePlese = (e) => {
    e.preventDefault();
    settotalquantity(totalquantity + 1);
  };

  const handleMaines = (e) => {
    e.preventDefault();
    settotalquantity(totalquantity - 1);
  };

  setquantity(totalquantity);
  const totalprice = price * totalquantity;
  setproprice(totalprice);

  const handleProductDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-server-jd3g.onrender.com/myCarts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingmy = myproducts.filter((c) => c._id !== _id);
            setmyproducts(remainingmy);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className=" relative grid items-center border grid-cols-6 md:px-8 mt-8">
      <div className="absolute top-4 right-5 text-xl font-bold">
        <button onClick={() => handleProductDelete(_id)}>X</button>
      </div>
      <div className="col-span-2">
        <div className="flex gap-5 md:gap-0 items-center">
          <div className="flex-1">
            <img className="size-28" src={Photo} />
          </div>
          <div>
            <h2 className="font-semibold mb-1">{name}</h2>
            <p>{supplier}</p>
          </div>
        </div>
      </div>
      <div className="flex ml-4 justify-evenly col-span-4">
        <div className="flex gap-4 text-[16px]">
          <button onClick={handleMaines}>-</button>
          <h1>{totalquantity}</h1>
          <button onClick={handlePlese}>+</button>
        </div>
        <h2>${price}</h2>
        <h2>${totalprice}</h2>
      </div>
    </div>
  );
};

export default CartProduct;
