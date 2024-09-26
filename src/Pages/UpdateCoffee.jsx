import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData()

    const handelUpdateCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chefName = form.chefName.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {
          name,
          chefName,
          supplier,
          taste,
          category,
          details,
          photo,
        };

        fetch(`http://localhost:5000/coffees/${coffee._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json)
          .then((data) => {
            console.log(data);
          });

    }
    return (
      <div>
        <div className="bg-[#F4F3F0] md:p-20 ">
          <div className="text-center space-y-5 text-[#331A15]">
            <h1 className="sm:text-lg md:text-4xl font-bold">
              Update The Coffee
            </h1>
          </div>
          <form onSubmit={handelUpdateCoffee} className="text-[#331A15] mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="">
                <p className="font-bold">Name</p>
                <input
                  className="w-full px-2 py-2 border-2 border-gray-300"
                  type="text"
                  name="name"
                  id=""
                  defaultValue={coffee.name}
                />
              </div>
              <div className="">
                <p className="font-bold">Chef Name</p>
                <input
                  className="w-full px-2 py-2 border-2 border-gray-300"
                  type="text"
                  name="chefName"
                  id=""
                  defaultValue={coffee.chefName}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="">
                <p className="font-bold">Supplier</p>
                <input
                  className="w-full px-2 py-2 border-2 border-gray-300"
                  type="text"
                  name="supplier"
                  id=""
                  defaultValue={coffee.supplier}
                />
              </div>
              <div className="">
                <p className="font-bold">Taste</p>
                <input
                  className="w-full px-2 py-2 border-2 border-gray-300"
                  type="text"
                  name="taste"
                  id=""
                  defaultValue={coffee.taste}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <div className="">
                <p className="font-bold">Category</p>
                <input
                  className="w-full px-2 py-2 border-2 border-gray-300"
                  type="text"
                  name="category"
                  id=""
                  defaultValue={coffee.category}
                />
              </div>
              <div className="">
                <p className="font-bold">Details</p>
                <input
                  className="w-full px-2 py-2 border-2 border-gray-300"
                  type="text"
                  name="details"
                  id=""
                  defaultValue={coffee.category}
                />
              </div>
            </div>
            <div className="">
              <p className="font-bold">Photo URL</p>
              <input
                className="w-full border-2 border-gray-300 px-2 py-2"
                type="text"
                name="photo"
                id=""
                defaultValue={coffee.category}
              />
            </div>
            <button className="bg-[#D2B48C] text-[#331A15] font-bold w-full mt-7 py-2">
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    );
};

export default UpdateCoffee;