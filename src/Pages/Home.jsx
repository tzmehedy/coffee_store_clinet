import heroBg from '../assets/images/more/3.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
      <div className="">
        {/* Hero Section */}
        <div
          className="h-[calc(100vh-80px)] w-full flex justify-center items-center text-white"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-1/2"></div>
          <div className="w-1/2 mr-5 space-y-4">
            <h1 className="text-3xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-justify">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] text-[#242222] font-bold px-2 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* About Coffee */}

        <div className="bg-[#ECEAE3] flex justify-center p-16">
          <div className="flex justify-between gap-5">
            <div className="text-[#331A15]">
              <img src={icon1} alt="" />
              <h1 className="font-bold">Awesome Aroma</h1>
              <p>
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
            <div className="text-[#331A15] ">
              <img src={icon2} alt="" />
              <h1 className="font-bold">High Quality</h1>
              <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className="text-[#331A15]">
              <img src={icon3} alt="" />
              <h1 className="font-bold">Pure Grades</h1>
              <p>
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
            <div className="text-[#331A15]">
              <img src={icon4} alt="" />
              <h1 className="font-bold">Proper Roasting</h1>
              <p>
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="text-center space-y-5">
            <span>--- Sip & Savor ---</span>

            <h1 className="text-5xl font-bold text-[#331A15]">
              Our Popular Products
            </h1>
            <button className="bg-[#E3B577]  px-3 py-2 text-white font-bold border-2 border-[#331A15]">
              <Link to={'/addCoffee'}>Add Coffee</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Home;