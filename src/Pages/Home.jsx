import heroBg from '../assets/images/more/3.png'
const Home = () => {
    return (
      <div className="">
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
            <button className="bg-[#E3B577] text-[#242222] font-bold px-2 py-2 rounded-lg">Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default Home;