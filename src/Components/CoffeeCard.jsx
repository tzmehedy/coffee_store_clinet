import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chefName, supplier, taste, category, details, photo } =
    coffee;

  const handelDelete = (id) => {
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
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const remainingCoffees = coffees.filter(coffee => coffee._id !== id )

        setCoffees(remainingCoffees)
      }
    });
  };

  return (
    <div>
      <div className="flex bg-base-100 shadow-xl">
        <figure>
          <img src={photo} />
        </figure>
        <div className="flex justify-evenly items-center space-x-3 ml-2">
          <div>
            <h2 className="font-bold">Name: {name}</h2>
            <p>Category: {category}</p>
            <p>Price: $90</p>
          </div>
          <div className=" justify-center">
            <div className="join join-vertical space-y-3">
              <Link className="btn join-item">
                <FaEye className="text-green-800" />
              </Link>
              <Link
                onClick={() => handelDelete(_id)}
                className="btn join-item "
              >
                <MdDelete className="text-red-800" />
              </Link>
              <Link to={`/updateCoffee/${_id}`} className="btn join-item">
                <MdEdit className="text-yellow-800" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;