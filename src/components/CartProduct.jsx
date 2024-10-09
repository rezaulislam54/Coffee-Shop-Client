import Swal from "sweetalert2";

const CartProduct = ({ product, setmyproducts, myproducts }) => {
  const { _id, name, quantity, supplier, price, Photo } = product;

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
        fetch(`http://localhost:5000/myCarts/${_id}`, {
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
        <h2>
          <input
            type="number"
            defaultValue={quantity}
            id=""
            className="w-14 border pl-4 "
          />
        </h2>
        <h2>${price}</h2>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default CartProduct;
