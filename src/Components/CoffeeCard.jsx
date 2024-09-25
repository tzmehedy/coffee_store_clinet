const CoffeeCard = ({coffee}) => {

    const { name, chefName, supplier, taste, category, details, photo } =
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
              <div className="join join-vertical">
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;