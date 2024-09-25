import { Outlet } from "react-router-dom";
import Headers from "../Components/Headers";
import Footer from "../Components/Footer";

const Root = () => {
    return (
      <div className="">
        <Headers></Headers>
        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;