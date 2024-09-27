import { useLoaderData } from "react-router-dom";


//  _id, name, chefName, supplier, taste, category, details, photo; 

const CoffeDetails = () => {
    const coffee = useLoaderData()
    return (
      <div>
        <div className=" bg-base-200 shadow-xl flex justify-around items-center mt-20 p-20">
          <figure>
            <img src={coffee.photo} />
          </figure>
          <div className="text-[#331A15]">
            <h1 className="text-xl font-bold">Name: {coffee.name}</h1>
            <p>Chef Name: {coffee.chefName}</p>
            <p>Supplier: {coffee.supplier}</p>
            <p>Taste: {coffee.taste}</p>
            <p>Category: {coffee.category}</p>
            <p>Details: {coffee.details}</p>
            <p></p>
          </div>
        </div>
      </div>
    );
};

export default CoffeDetails;