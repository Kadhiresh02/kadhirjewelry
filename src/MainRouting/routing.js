import { createBrowserRouter } from "react-router";
import MainDashboard from "../components/MainDashboard";
import Home from '../components/Home';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
const routing= createBrowserRouter([
    {path:"",element:<MainDashboard/>,children:[
        {path:"",element:<Home/>},
        {path:"About",element:<About/>},
        {path:"Products",element:<Products/>},
        {path:"Contact",element:<Contact/>},
        
    ]}
])

export default routing;