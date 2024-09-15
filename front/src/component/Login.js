import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { toast } from "react-toastify";
const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleOnChange = (e) =>{
    const{name,value} = e.target;
    setData((prev) => {
      return{
        ...prev,
        [name] : value,
      }
    })
  }
  console.log("data : ",data);

  const handleOnSubmit = async(e)=>{
    e.preventDefault();
    const dataResponse = await fetch("/pip/signin",{
      method : "POST",
      headers:{
        'content-type' : 'application/json',
      },
      body:JSON.stringify(data),
    })
    const dataApi = await dataResponse.json();
    console.log("data Api ",dataApi);
    if(dataApi.success){
      toast.success(dataApi.message);
      navigate('/home')
      
      console.log(dataApi.message);
      
    }
    console.log(dataApi);
      
  }
 
  

  return (
    <div>
        <div className=" w-[80%] md:w-[50%]  text-white m-auto mt-9 p-10 ">
        <form action="" className='flex flex-col gap-4  text-xl' onSubmit={handleOnSubmit}>
          <label htmlFor="">Username</label>
          <input type="text" name="email" id="" value={data.email} className='p-3 text-black rounded-2xl' onChange={handleOnChange}/>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" value={data.password} className='p-3 text-black rounded-2xl' onChange={handleOnChange}/>
          <button 
          className='text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white w-20 m-5'
          >
          Log In
        </button>
        </form>
        <p className='p-3 text-xl'>
          <Link to={"/signup"}>
             <p className='text- text-xl font-bold hover:text-blue-500 m-5'> Don't have an Account...! Sign Up</p>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
