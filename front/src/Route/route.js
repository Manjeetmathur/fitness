import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Contact from "../component/Contact";
import About from "../component/About";
import Login from "../component/Login";
import Signup from "../component/Signup";
import Start from "../component/Start";


const router = createBrowserRouter([
       // createRoutesFromElements(
       //        <Route path="/" element = {<App/>}>
       //               <Route path="home" element={<Home/>}/>
                     
       //        </Route>
       // )

       {
              path  : "/",
              element : <App/>,
              children : [
                     {
                            path : 'home',
                            element : <Home/>
                     },
                     {
                            path : 'contact',
                            element : <Contact/>
                     },
                     {
                            path : 'about',
                            element : <About/>
                     },
                     {
                            path : 'login',
                            element : <Login/>
                     },
                     {
                            path : 'signup',
                            element : <Signup/>
                     },
                     {
                            path : 'food',
                            element : <Start/>
                     },
                   
              ]
       }

])
export default router