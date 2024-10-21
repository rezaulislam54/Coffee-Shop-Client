import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthContexProvider";

const ProductCart = ({ coffee, delatable, items, setitems }) => {
  const { _id, name, quantity, supplier, price, Photo } = coffee;

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
        fetch(`https://coffee-shop-server-jd3g.onrender.com/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingmy = items.filter((c) => c._id !== _id);
            setitems(remainingmy);
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

  const { user } = useContext(AuthContext);
  const email = user?.email;

  const handleAddToCard = (name, quantity, supplier, price, Photo, email) => {
    const info = { name, quantity, supplier, price, Photo, email };
    console.log(info);

    fetch("https://coffee-shop-server-jd3g.onrender.com/myCarts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Add to Cart Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="bg-[#F5F4F1] p-8 shadow-lg rounded-lg border">
      <div className="flex gap-3 md:gap-8 items-center">
        <img className="size-32 md:size-48" src={Photo} />
        <div className="flex justify-between items-center w-full">
          <div>
            <h2>
              <span className="text-xl font-medium mr-1">Name:</span> {name}
            </h2>
            <h2>
              <span className="text-xl font-medium mr-1">Supplier: </span>
              {supplier}
            </h2>
            <h2>
              <span className="text-xl font-medium mr-1">Price:</span> {price}{" "}
              Taka
            </h2>
            <h2>
              <span className="text-xl font-medium mr-1">Quantity:</span>{" "}
              {quantity}
            </h2>
          </div>
          <div className="join join-vertical space-y-3">
            <Link to={`/viewdetails/${_id}`}>
              <button className="btn join-item btn-primary">Details</button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button className="btn join-item btn-secondary">Update</button>
            </Link>
            {delatable ? (
              <button
                onClick={() => handleProductDelete(_id)}
                className="btn join-item btn-accent"
              >
                Delete
              </button>
            ) : (
              <button
                onClick={() =>
                  handleAddToCard(
                    coffee.name,
                    coffee.quantity,
                    coffee.supplier,
                    coffee.price,
                    coffee.Photo,
                    email
                  )
                }
                className="btn join-item btn-accent"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
