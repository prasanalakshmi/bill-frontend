import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import About from "../components/user/main/about/About";
import Addbills from "../components/user/main/addbills/Addbills";
import Filterbills from "../components/user/main/filterbills/Filterbills";


let routes =createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },{
        path:"/",
        element:<Login></Login>
    },{
        path:"/home",
        element:<Main></Main>,
        children:[
            {
            index:true,
            element:<Home></Home>
            },{
                path:"about",
                element:<About></About>
            },{
                path:"addbills",
                element:<Addbills></Addbills>
            },{
                path:"filterbills",
                element:<Filterbills></Filterbills>
            }
        ]
    }
])



export default routes