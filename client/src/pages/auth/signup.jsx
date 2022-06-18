import React from "react";

import Logo from "../../images/transparent.png";

import { HiOutlineMenu } from "react-icons/hi";

const SignUp = () => {
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center bg-white pb-10'>
      <div className='flex w-full bg-black p-5 px-10'>
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
        <button className='ml-auto text-white text-x sm:hidden'>
          <HiOutlineMenu />
        </button>
      </div>
      <div className='w-full bg-white h-auto p-5'>
        <h1 className='text-center font-semibold font-serif text-3xl'>
          Let's Get Started
        </h1>
        <br />
        <br />
        <div className='px-5'>
          <div>
            <label htmlFor=''>Full name</label>
            <br />
            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
            />
            <br />
            <span className='text-xs'>
              Enter you name as it appears on your drivers license
            </span>
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Phone Number</label>
            <br />
            <input
              type='number'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Email</label>
            <br />
            <input
              type='email'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Date of Birth</label>
            <br />
            <input
              type='date'
              className='border w-full bg-white p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              value='2018-07-22'
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Address</label>
            <br />
            <textarea
              name=''
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              rows='2'
            ></textarea>
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Password</label>
            <br />
            <input
              type='password'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
            />
          </div>
          <div className='py-2 flex'>
            <input
              type='checkbox'
              className='appearance-none border h-5 w-5 rounded mt-1 checked:bg-black'
            />
            <p className='pl-2 text-md'>
              I agree to the{" "}
              <span className='text-blue-600'>Terms & Conditions</span>
            </p>
          </div>
          <br />
          <button className='w-full bg-gray-900 text-white rounded-md p-3 text-center font-light shadow transition-all hover:bg-opacity-90 active:scale-90'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
