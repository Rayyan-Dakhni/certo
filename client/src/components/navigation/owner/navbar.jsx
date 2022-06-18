import React from "react";

import Logo from "../../../images/transparent.png";

import { HiMenu, HiPhone, HiQuestionMarkCircle } from "react-icons/hi";
import { ShowSidebar } from "../../../helper/functions";
import { useNavigate } from "react-router-dom";

const OwnerNavbar = (props) => {
  const navigate = useNavigate();

  if (props.loggedIn) {
    return (
      <div className='flex w-full p-2 px-5 bg-black'>
        <img
          onClick={() => {
            navigate("/owner/dashboard", { replace: true });
          }}
          src={Logo}
          className='w-16 h-auto cursor-pointer'
          alt=''
        />

        <div className='ml-auto'>
          <div className='flex space-x-3 text-white text-xl pt-3'>
            <button className='p-1 rounded-full bg-black hover:bg-gray-600'>
              <HiPhone />
            </button>
            <button className='p-1'>
              <HiQuestionMarkCircle />
            </button>
            <button
              onClick={() => {
                ShowSidebar("sidebar");
              }}
              className='p-1'
            >
              <HiMenu />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex w-full bg-black p-5 px-10'>
        <img src={Logo} className='w-16 sm:w-24' alt='' />
      </div>
    );
  }
};

export default OwnerNavbar;
