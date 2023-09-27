import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const Layout = () => {
    return (
       <div className="max-w-[1300px] mx-auto">
        <div>
<Navbar></Navbar>

<div className="py-10">
<Outlet></Outlet>
</div>
       </div>
       </div>
        
    );
};

export default Layout;    






