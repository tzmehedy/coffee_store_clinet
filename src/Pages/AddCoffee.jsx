import Swal from "sweetalert2";

const AddCoffee = () => {
  const handelAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chefName = form.chefName.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffees = {
      name,
      chefName,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffees),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Successfully added a new coffee",
          icon: "success",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="bg-[#F4F3F0] md:p-20 ">
      <div className="text-center space-y-5 text-[#331A15]">
        <h1 className="sm:text-lg md:text-4xl font-bold">Add New Coffee</h1>
        <p className="text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handelAddCoffee} className="text-[#331A15]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <p className="font-bold">Name</p>
            <input
              className="w-full px-2 py-2 border-2 border-gray-300"
              type="text"
              name="name"
              id=""
            />
          </div>
          <div className="">
            <p className="font-bold">Chef Name</p>
            <input
              className="w-full px-2 py-2 border-2 border-gray-300"
              type="text"
              name="chefName"
              id=""
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
            />
          </div>
          <div className="">
            <p className="font-bold">Taste</p>
            <input
              className="w-full px-2 py-2 border-2 border-gray-300"
              type="text"
              name="taste"
              id=""
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
            />
          </div>
          <div className="">
            <p className="font-bold">Details</p>
            <input
              className="w-full px-2 py-2 border-2 border-gray-300"
              type="text"
              name="details"
              id=""
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
          />
        </div>
        <button className="bg-[#D2B48C] text-[#331A15] font-bold w-full mt-7 py-2">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
