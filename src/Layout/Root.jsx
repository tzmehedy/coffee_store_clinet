import { Outlet } from "react-router-dom";
import Headers from "../Components/Headers";

const Root = () => {
    return (
      <div className="container mx-auto">
        <Headers></Headers>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Root;