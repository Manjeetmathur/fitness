import './App.css';
import Header from "./component/Header"
import Footer from "./component/Footer"
import {Outlet} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';


function App() {
  return (
    <div className="">
    <ToastContainer/>
        
        <Header/>
        <main className='min-h-[calc(100vh-180px)]'>
          <Outlet/>
        </main>
        <Footer />
       
    </div>
  );
}

export default App;
