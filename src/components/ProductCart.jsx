const ProductCart = ({ coffee }) => {
  const { name, quantity, supplier, price, Photo } = coffee;
  console.log(coffee);

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
            <button className="btn join-item btn-accent">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
