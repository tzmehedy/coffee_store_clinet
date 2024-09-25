import heroBg from '../assets/images/more/3.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from '../Components/CoffeeCard'

import followImg1 from '../assets/images/cups/Rectangle 10.png'
import followImg2 from '../assets/images/cups/Rectangle 11.png'
import followImg3 from '../assets/images/cups/Rectangle 12.png'
import followImg4 from '../assets/images/cups/Rectangle 13.png'
import followImg5 from '../assets/images/cups/Rectangle 14.png'
import followImg6 from '../assets/images/cups/Rectangle 15.png'
import followImg7 from '../assets/images/cups/Rectangle 16.png'
import followImg8 from '../assets/images/cups/Rectangle 9.png'
const Home = () => {

  const coffees = useLoaderData()



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
          <div className="flex flex-col md:flex-row justify-between gap-5">
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
        <div className='mt-20'>
          <div className="text-center space-y-5">
            <span>--- Sip & Savor ---</span>

            <h1 className="text-5xl font-bold text-[#331A15]">
              Our Popular Products
            </h1>
            <button className="bg-[#E3B577]  px-3 py-2 text-white font-bold border-2 border-[#331A15]">
              <Link to={"/addCoffee"}>Add Coffee</Link>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center">
              <span className="text-[#1B1A1A]">Follow Us Now</span>
              <h1 className="text-[#331A15] font-bold text-3xl">
                Follow Us Instagram
              </h1>

              <div className="grid md:grid-cols-4 mt-16 gap-5">
                <img src={followImg1} alt="" />
                <img src={followImg2} alt="" />
                <img src={followImg3} alt="" />
                <img src={followImg4} alt="" />
                <img src={followImg5} alt="" />
                <img src={followImg6} alt="" />
                <img src={followImg7} alt="" />
                <img src={followImg8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;