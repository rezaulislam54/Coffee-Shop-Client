import { BiSolidAlarmAdd } from "react-icons/bi";
// import { GoArrowLeft } from "react-icons/go";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const Photo = e.target.image.value;
    const taste = e.target.taste.value;
    const price = e.target.price.value;

    const coffee = {
      name,
      quantity,
      supplier,
      category,
      details,
      taste,
      price,
      Photo,
    };
    // console.log(coffee);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className=" container mx-auto mt-5 ">
      <div className="w-11/12 mx-auto shadow-lg p-10 rounded-lg border bg-[#F4F3F0]">
        {/* Heading */}
        <div className="text-center flex justify-center items-center text-3xl mt-5 mb-8 font-semibold">
          <span className="mr-3 text-[#FF497C]">
            <BiSolidAlarmAdd />
          </span>
          <span className="dark:text-white">
            <span className="text-[#FF497C]">Add</span>
            Your Product
          </span>
        </div>
        {/* form */}
        <form onSubmit={handleAddCoffee}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Supplier
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter coffee supplier"
                id="supplier"
                name="supplier"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="category"
              >
                Category
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter coffee category"
                id="category"
                name="category"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="number"
                placeholder="Enter coffee Price"
                id="price"
                name="price"
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Quantity
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="number"
                placeholder="Enter coffee Quantity "
                id="quantity"
                name="quantity"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                Taste
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter coffee taste"
                id="taste"
                name="taste"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Details
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter coffee details"
                id="details"
                name="details"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="image"
              >
                Coffee Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter coffee Image"
                id="image"
                name="image"
              />
            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
