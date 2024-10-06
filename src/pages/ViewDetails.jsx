import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const coffee = useLoaderData();
  const { Photo, name, supplier, price, quantity } = coffee;

  return (
    <div className="my-20 flex gap-5">
      <div>
        <img
          className="h-72 w-52"
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728233589/5_samixw.png"
          alt=""
        />
      </div>
      <div className="bg-[#F5F4F1] w-1/2 mx-auto h-fit p-8 shadow-lg rounded-lg border">
        <div className="flex gap-32 items-center">
          <img className="size-48" src={Photo} />
          <div className="space-y-1">
            <h1 className="text-xl font-bold">Niceties</h1>
            <p>
              <span className="font-semibold mr-2">Name:</span> {name}
            </p>
            <p>
              <span className="font-semibold mr-2">Supplier:</span>
              {supplier}
            </p>
            <p>
              <span className="font-semibold mr-2">Quantity:</span> {quantity}
            </p>
            <p>
              <span className="font-semibold mr-2">Price:</span>
              {price} Taka
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-72 w-52"
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728233588/4_ew1b9v.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ViewDetails;
