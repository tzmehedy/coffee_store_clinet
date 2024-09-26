import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({coffee}) => {

    const {_id, name, chefName, supplier, taste, category, details, photo } =
      coffee;

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
                <Link className="btn join-item ">
                  <MdDelete className="text-red-800" />
                </Link>
                <Link to={`/updateCoffee/${_id}`} className="btn join-item">
                  <MdEdit className="text-yellow-800"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;