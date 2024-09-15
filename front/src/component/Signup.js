import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Signup = () => {
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)

  const[data,setData] = useState({

    email : "",
    phone : "",
    password : "",
    confirmPassword : "",

  })
  const navigate = useNavigate();

  const handleOnChange = (e) =>{
    const {name , value} = e.target;

    setData((prev) => {
      return{
        ...prev,
        [name] : value,
      }
    })
  }
  console.log("data : ",data);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    const dataResponse = await fetch("/pip/signup",{
      method : "post",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(data)
    })

    const dataApi = await dataResponse.json();
    if(dataApi.success){
      navigate('/login')
    }
    else{

    }
    console.log("data : ",dataApi)
  }
  return (
    <div>
      <div className=" w-[80%] md:w-[50%] border-red-500 text-white m-auto mt-9 p-4 ">
        <form action="" className='flex flex-col gap-4  text-xl' onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input type="email" name="email" value={data.email} id="" className='p-3 text-black rounded-2xl' onChange={handleOnChange}/>
          
          <label htmlFor="">Phone</label> 
          <input type="text" name="phone" id="" value={data.phone} className='p-3  text-black rounded-2xl' onChange={handleOnChange}/>
          <label htmlFor="">Password</label>
          <input type="text" name="password" id="" value={data.password} className='p-3 text-black rounded-2xl' onChange={handleOnChange}/>
          <label htmlFor="">Confirm Password</label>
          <input type="text" name="confirmPassword" value={data.confirmPassword} id="" className='p-3 text-black rounded-2xl' onChange={handleOnChange}/>
          <button 
          className='text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white w-20 m-5 ml-[150px]'
          >
          Sign Up
        </button>
        </form>
        <p className='p-3 text-xl'>
          <Link to={"/login"}>
          <p className='text- text-xl font-bold hover:text-blue-500 mt-5 ml-[20px]'> Already have an Account...!  Log In</p>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
