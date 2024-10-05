import Swal from "sweetalert2";

const ProductCart = ({ coffee }) => {
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
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
    <div className="bg-[#F5F4F1] p-8 shadow-lg rounded-lg border">
      <div className="flex gap-10 items-center">
        <img className="size-48" src={Photo} />
        <div className="flex justify-between items-center w-full">
          <div>
            <h2>Name: {name}</h2>
            <h2>Supplier: Mr. {supplier}</h2>
            <h2>Price: {price} Taka</h2>
            <h2>Quantity : {quantity}</h2>
          </div>
          <div className="join join-vertical space-y-3">
            <button className="btn join-item btn-primary">View</button>
            <button className="btn join-item btn-secondary">Update</button>
            <button
              onClick={() => handleProductDelete(_id)}
              className="btn join-item btn-accent"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
