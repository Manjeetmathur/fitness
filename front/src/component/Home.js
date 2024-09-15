import React from 'react'
import samosa from '../Images/14.jpg'
import p10 from "../Images/15.jpg"
import p11 from "../Images/16.jpg"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className=" ">
        <div className="">
          <div className="md:flex  ">
            <img src={samosa} alt="" 
              className='w-[100%] h-[450px] md:w-[80%] md:m-10 m-auto border-solid  shadow-2xl '
            />
            <div className=" m-5  mt-10 mb-10 p-1 md:mt-24">
              <h1 className='text-blue-500 text-6xl font-bold '>Introducing Our Innovative Fitness App</h1>
              
              <p className='m-5 text-xl text-white'>
                  <span>
                    For the best you want . <br />
                    Achieve your fitness goals and earn rewards along the way with our cuttingedge app.<br />
                    Explore our menu and learn more about  the rich culinary traditions that inspire our creation...
                  </span>
              </p>
              <Link to={"/food"}>
                <button 
                  className='text-[10px] md:text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white ml-[180px] mt-5'>
                  Start Now
                </button>
              </Link>
            </div>
          </div>
          <div className="md:flex flex-row-reverse">
          <img src={p10} alt="" 
              className='w-[100%] h-[450px] md:w-[80%] md:m-10 m-auto border-solid  shadow-2xl '
            />
              <div className=" m-5 p-1 ">
                <h1 className='text-blue-500 text-5xl font-bold '>Personalized Diet Plans and Workout Routines</h1>
                <h1 className='text-blue-300 text-2xl m-6 font-bold '>Personalized Diet Plans</h1>
                <p className='m-5 text-xl text-white'>
                    <span>
                    Our AI-powered system creates custom meal plans to help you reach your nutritional goals.
                    </span>
                </p>
                <h1 className='text-blue-300 text-2xl m-6 font-bold '>Tailored Workouts</h1>
                <p className='m-5 text-xl text-white'>
                    <span>Enjoy workout routines designed specifically for your fitness level and preferences.
                    </span>
                </p><h1 className='text-blue-300 text-2xl m-6 font-bold '>Comprehensive Guidance</h1>
                <p className='m-5 text-xl text-white'>
                    <span>Let our app be your personal trainer, providing step-by-step instructions for each exercise.</span>
                </p>
                <Link to={"/food"}>
                <button 
                  className='text-[10px] md:text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white ml-[180px] mt-5'>
                  Explore For More
                </button>
                </Link>
              
              </div>
            
          </div>
          <div className="md:flex">
          <img src={p11} alt="" 
              className='w-[100%] h-[450px] md:w-[80%] md:m-10 m-auto border-solid  shadow-2xl '
            />
              <div className=" m-5 p-1 ">
                <h1 className='text-blue-500 text-4xl font-bold '>AI-Powered Fitness Journey</h1>
                <h1 className='text-blue-300 text-2xl m-6 font-bold '>Assess</h1>
                <p className='m-5 text-xl text-white'>
                    <span>
                      Our AI analyzes your fitness level, goals, and lifestyle
                    to create a personalized plan.
                    </span>
                </p>
                <h1 className='text-blue-300 text-2xl m-6 font-bold '>Adapt</h1>
                <p className='m-5 text-xl text-white'>
                    <span>
                    The app continuously adjusts your program based on your progress and feedback.
                    </span>
                </p><h1 className='text-blue-300 text-2xl m-6 font-bold '>Achieve</h1>
                <p className='m-5 text-xl text-white'>
                    <span>
                    Follow the app's guidance to reach your fitness milestones and exceed your expectations.
                    </span>
                </p>
                <Link to={"/food"}>
                <button 
                  className='text-[10px] md:text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white ml-[180px] mt-5'>
                  Start Now
                </button>
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
