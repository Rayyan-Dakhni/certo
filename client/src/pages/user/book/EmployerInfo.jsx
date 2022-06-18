import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../../components/navigation/user/navbar";
import UserSidebar from "../../../components/navigation/user/sidebar";

import { HiCamera } from "react-icons/hi";

const BookVehicleEmployerInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;

  const [loggedIn, setLoggedIn] = useState();

  // const vehicleId = location.state.vehicleId;

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contactName, setContactName] = useState();
  const [contactPhoneNo, setContactPhoneNo] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className='w-screen min-h-screen'>
      <UserNavbar loggedIn={loggedIn} />
      <UserSidebar />

      {/* Content */}
      <div className='p-5'>
        <h2 className='text-2xl font-medium font-sans px-5'>
          Employer Details
        </h2>

        <div className='p-5'>
          {/* Name */}
          <div className='mt-2'>
            <label htmlFor='State'>Name</label>
            <br />

            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          {/* Address */}
          <div className='mt-2'>
            <label htmlFor='State'>Address</label>
            <br />

            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          {/* Contact Name */}
          <div className='mt-2'>
            <label htmlFor='State'>Contact Name</label>
            <br />

            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setContactName(e.target.value);
              }}
            />
          </div>

          {/* Name */}
          <div className='mt-2'>
            <label htmlFor='State'>Phone Number</label>
            <br />

            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setContactPhoneNo(e.target.value);
              }}
            />
          </div>

          <button
            id='addBtn'
            onClick={() => {
              navigate("/vehicle/book/dlInfo", {
                replace: true,
                state: {
                  ...state,
                  emploer_details: {
                    name: name,
                    address: address,
                    contact_name: contactName,
                    contact_phone_no: contactPhoneNo,
                  },
                },
              });
            }}
            className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
          >
            Add Employer Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookVehicleEmployerInfo;
