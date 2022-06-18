import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../../components/navigation/user/navbar";
import UserSidebar from "../../../components/navigation/user/sidebar";

import { HiCamera } from "react-icons/hi";

const BookVehicleDlInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState();

  const vehicleId = location.state.vehicleId;

  const [driverLicenseImage, setDriverLicenseImage] = useState();
  const [dlState, setDlState] = useState();
  const [dlExpiration, setDlExpiration] = useState();

  const [dlImageUrl, setDlImageUrl] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const HandleOnChange = (e, setUrl, setImage) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);

    setUrl(imgUrl);
    setImage(file);
  };

  return (
    <div className='w-screen min-h-screen'>
      <UserNavbar loggedIn={loggedIn} />
      <UserSidebar />

      {/* Content */}
      <div className='p-5'>
        <h2 className='text-2xl font-medium font-sans px-5'>
          Driving License Details
        </h2>

        <div className='p-5'>
          {/* Driving License Image */}
          <div>
            <label htmlFor='front image'>Driving License Image</label>
            <br />

            <input
              type='file'
              className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                HandleOnChange(e, setDlImageUrl, setDriverLicenseImage);
              }}
              name='dl_image'
            />
            <br />
            <br />

            <div className='w-full h-auto rounded-md border'>
              {!driverLicenseImage ? (
                <div className='p-5'>
                  <HiCamera className='mx-auto text-4xl' />
                  <br />
                  <h3 className='text-center'>No image selected</h3>
                </div>
              ) : (
                <img
                  src={dlImageUrl}
                  className='w-full h-full rounded-md'
                  alt='Vehicle front image'
                />
              )}
            </div>
          </div>

          {/* Driving License State/Country */}
          <div className='mt-2'>
            <label htmlFor='State'>State/Country</label>
            <br />
            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              placeholder='eg. Brazil'
              onChange={(e) => {
                setDlState(e.target.value);
              }}
            />
          </div>

          {/* Driving License State/Country */}
          <div className='mt-2'>
            <label htmlFor='State'>Expiration Date</label>
            <br />
            <input
              type='date'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setDlExpiration(e.target.value);
              }}
            />
          </div>

          <button
            id='addBtn'
            onClick={() => {
              navigate("/vehicle/book/insuranceInfo", {
                replace: true,
                state: {
                  ...location.state,
                  license_details: {
                    image: driverLicenseImage,
                    state: dlState,
                    expiration: dlExpiration,
                  },
                },
              });
            }}
            className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
          >
            Add Driving License Details
          </button>

          {/* <div className='text-lg'>
            <b>Book for number of:</b>

            <br />

            <div className='mt-3 grid grid-cols-3 gap-4'>
              <button className='p-2 w-full rounded-md bg-gray-900 text-white'>
                Hours
              </button>

              <button className='p-2 w-full rounded-md bg-white transition-all hover:bg-gray-200'>
                Days
              </button>

              <button className='p-2 w-full rounded-md bg-white transition-all hover:bg-gray-200'>
                Weeks
              </button>
            </div>

            <br />

            <input
              type='number'
              placeholder='Enter Number of Hours'
              className='p-2 px-5 rounded-md border w-full focus:outline-none focus:border-gray-900'
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookVehicleDlInfo;
