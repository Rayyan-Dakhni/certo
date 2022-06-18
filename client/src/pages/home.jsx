import React from "react";

import Logo from "../images/transparent.png";

import Car from "../images/Audi-Wallpaper-5.jpg";

import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineSearch,
  HiOutlineMenu,
  HiX,
} from "react-icons/hi";

import Atlanta from "../images/destinations/atlanta.jpg";
import Phoenix from "../images/destinations/phoenix.jpg";
import LasVegas from "../images/destinations/las-vegas.jpg";
import Orlando from "../images/destinations/orlando.jpg";
import Dallas from "../images/destinations/dallas.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className='relative w-screen h-screen bg-black bg-no-repeat sm:bg-right bg-center'
        style={{ backgroundImage: `url(${Car})`, backgroundSize: "100%" }}
      >
        <div className='flex w-full bg-transparent p-5 px-10'>
          <img src={Logo} className='w-16 sm:w-24' alt='' />
          <div className='w-full p-5 text-center hidden sm:block'>
            <div className='flex justify-center space-x-10'>
              <p className='text-gray-500 font-light'>Find your car</p>
              <p className='text-gray-500 font-light'>How it works</p>
              <p className='text-gray-500 font-light'>Create an account</p>
            </div>
          </div>
          <div className='w-64 space-x-5 py-4 hidden sm:block'>
            <button className='p-2 px-4 border rounded-md text-white'>
              Log In
            </button>
            <button className='p-2 px-4 border rounded-md text-white'>
              Sign Up
            </button>
          </div>
          <button
            onClick={() => {
              const sidebar = document.getElementById("sidebar");

              sidebar.style.transform = "translateX(0)";
              // sidebar.style.opacity = 1;
              sidebar.style.visibility = "visible";
            }}
            className='ml-auto text-white text-x sm:hidden'
          >
            <HiOutlineMenu />
          </button>
        </div>

        <div className='sm:p-32 p-10 sm:block'>
          <h1 className='text-3xl sm:text-6xl font-semibold text-white max-w-md text-center sm:text-left'>
            Rental Cars Can Be Experience
          </h1>
          <h3 className='text-gray-500 text-center sm:text-left text-lg pt-3'>
            Find your best match
          </h3>
        </div>
      </div>

      <div
        id='sidebar'
        className='absolute z-40 w-72 h-screen p-5 bg-white shadow-xl top-0 right-0 transition-all duration-500 transform translate-x-full invisible'
      >
        <div className='flex w-full justify-end p-3'>
          <button
            onClick={() => {
              const sidebar = document.getElementById("sidebar");

              sidebar.style.transform = "translateX(100%)";
              // sidebar.style.opacity = 0.5;
              sidebar.style.visibility = "hidden";
            }}
            className='text-black p-1 hover:bg-gray-200 rounded-full'
          >
            <HiX />
          </button>
        </div>

        <br />
        <h6 className='text-gray-500 text-sm'>Menu</h6>
        <br />

        <button className='p-2 px-5 text-left bg-white w-full hover:bg-black hover:text-white border border-black rounded-md'>
          Find Your Car
        </button>

        <br />
        <br />

        <button className='p-2 px-5 text-left bg-white w-full hover:bg-black hover:text-white border border-black rounded-md'>
          How it works
        </button>

        <br />
        <br />

        <button className='p-2 px-5 text-left bg-white w-full hover:bg-black hover:text-white border border-black rounded-md'>
          Create an account
        </button>

        <br />
        <br />
        <br />

        <Link
          to={"/login"}
          className='p-2 px-5 text-left bg-black text-white w-full hover:bg-black hover:text-white border border-black rounded-md'
        >
          Login
        </Link>
      </div>

      <div className='sm:relative w-full sm:px-24 bg-white'>
        <div className='absolute z-20 -mt-40 w-5/6 left-8 border bg-white rounded-xl sm:rounded-full p-5 sm:px-10 sm:-mt-10 shadow-md'>
          <div className='w-full sm:flex sm:space-x-5'>
            <div className='flex items-center space-x-5 sm:border-r sm:px-5 sm:pr-10'>
              <div>
                <HiOutlineLocationMarker className='text-2xl' />
              </div>
              <div>
                <h4 className='text-sm'>WHERE</h4>
                <input
                  type='text'
                  className='appearance-none py-1 font-light focus:outline-none'
                  placeholder='Enter Your Location'
                />
              </div>
            </div>
            <br className='sm:hidden' />
            <div className='flex items-center space-x-5 sm:border-r sm:px-5 sm:pr-10'>
              <div>
                <HiOutlineCalendar className='text-2xl' />
              </div>
              <div>
                <h4 className='text-sm'>FROM</h4>
                <input
                  type='date'
                  className='appearance-none py-1 font-light focus:outline-none'
                />
              </div>
              <div>
                <h4 className='text-sm'>TIME</h4>
                <input
                  type='time'
                  placeholder='Hello'
                  className='appearance-none py-1 font-light focus:outline-none'
                />
              </div>
            </div>
            <br className='sm:hidden' />
            <div className='flex items-center space-x-5 sm:border-r sm:px-5 sm:pr-10'>
              <div>
                <HiOutlineCalendar className='text-2xl' />
              </div>
              <div>
                <h4 className='text-sm'>UNTIL</h4>
                <input
                  type='date'
                  className='appearance-none py-1 font-light focus:outline-none'
                />
              </div>
              <div>
                <h4 className='text-sm'>TIME</h4>
                <input
                  type='time'
                  className='appearance-none py-1 font-light focus:outline-none'
                />
              </div>
            </div>
            <br className='sm:hidden' />
            <div className='w-full text-center pt-1'>
              <button className='w-auto bg-black text-white border rounded-full p-4'>
                <HiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mt-48 sm:mt-24'>
        <br />
        <h3 className='text-center text-2xl sm:text-4xl font-semibold'>
          Browse By Make
        </h3>
        <br />
        <div className='sm:px-32 px-5 py-5 grid grid-cols-2 sm:grid-cols-6 gap-4'>
          <div className='flex w-full items-center border rounded-xl p-5 shadow-sm'>
            <img
              src='data:image/jpeg;base64,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'
              alt=''
              className='w-full h-auto'
            />
          </div>
          <div className='flex w-full items-center border rounded-xl p-5 shadow-sm'>
            <img
              src='https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-10.png'
              alt=''
              className='w-full h-auto'
            />
          </div>
          <div className='flex w-full items-center border rounded-xl p-5 shadow-sm'>
            <img
              src='https://themechanicautos.com/wp-content/uploads/2018/05/Honda-Logo-PNG.png'
              alt=''
              className='w-full h-auto'
            />
          </div>
          <div className='flex w-full items-center border rounded-xl p-5 shadow-sm'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png'
              alt=''
              className='w-full h-auto'
            />
          </div>
          <div className='flex w-full items-center border rounded-xl p-5 shadow-sm'>
            <img
              src='https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png'
              alt=''
              className='w-full h-auto'
            />
          </div>
          <div className='flex w-full items-center border rounded-xl p-5 shadow-sm'>
            <img
              src='https://www.carlogos.org/car-logos/bmw-logo-1997-1200x1200.png'
              alt=''
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>

      <div className='w-full mt-10'>
        <br />
        <h3 className='text-center text-2xl sm:text-4xl font-semibold'>
          Browse By Destination
        </h3>
        <br />
        <div className='sm:px-32 px-10 py-5 grid grid-cols-1 sm:grid-cols-5 gap-4'>
          <div className='relative flex w-full items-center'>
            <img
              src={Atlanta}
              alt=''
              className='w-full h-full shadow-md rounded-md'
            />
            <div className='absolute left-0 bottom-0 w-full rounded-md p-3 bg-black bg-opacity-80'>
              <h3 className='text-white text-xl text-center font-mono'>
                Atlanta
              </h3>
            </div>
          </div>
          <div className='relative flex w-full items-center'>
            <img
              src={Phoenix}
              alt=''
              className='w-full h-full shadow-md rounded-md'
            />
            <div className='absolute left-0 bottom-0 w-full rounded-md p-3 bg-black bg-opacity-80'>
              <h3 className='text-white text-xl text-center font-mono'>
                Phoenix
              </h3>
            </div>
          </div>
          <div className='relative flex w-full items-center'>
            <img
              src={Orlando}
              alt=''
              className='w-full h-full shadow-md rounded-md'
            />
            <div className='absolute left-0 bottom-0 w-full rounded-md p-3 bg-black bg-opacity-80'>
              <h3 className='text-white text-xl text-center font-mono'>
                Orlando
              </h3>
            </div>
          </div>
          <div className='relative flex w-full items-center'>
            <img
              src={LasVegas}
              alt=''
              className='w-full h-full shadow-md rounded-md'
            />
            <div className='absolute left-0 bottom-0 w-full rounded-md p-3 bg-black bg-opacity-80'>
              <h3 className='text-white text-xl text-center font-mono'>
                Las Vegas
              </h3>
            </div>
          </div>
          <div className='relative flex w-full items-center'>
            <img
              src={Dallas}
              alt=''
              className='w-full h-full shadow-md rounded-md'
            />
            <div className='absolute left-0 bottom-0 w-full rounded-md p-3 bg-black bg-opacity-80'>
              <h3 className='text-white text-xl text-center font-mono'>
                Dallas
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className='py-20'></div>
    </>
  );
};

export default Home;
