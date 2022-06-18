import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../../components/navigation/user/navbar";
import UserSidebar from "../../../components/navigation/user/sidebar";

import { HiCamera } from "react-icons/hi";

const BookVehicleInsuranceInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState();

  const [insuranceImage, setInsuranceImage] = useState();
  const [insuranceCompany, setInsuranceCompany] = useState();
  const [insuranceNumber, setInsuranceNumber] = useState();
  const [insuranceExpiration, setInsuranceExpiration] = useState();

  const [insuranceImageUrl, setInsuranceImageUrl] = useState();

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
          Insurance Details
        </h2>

        <div className='p-5'>
          {/* Insurance Image */}
          <div>
            <label htmlFor='front image'>Insurance Image</label>
            <br />

            <input
              type='file'
              className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                HandleOnChange(e, setInsuranceImageUrl, setInsuranceImage);
              }}
              name='front_image'
            />
            <br />
            <br />

            <div className='w-full h-auto rounded-md border'>
              {!insuranceImage ? (
                <div className='p-5'>
                  <HiCamera className='mx-auto text-4xl' />
                  <br />
                  <h3 className='text-center'>No image selected</h3>
                </div>
              ) : (
                <img
                  src={insuranceImageUrl}
                  className='w-full h-full rounded-md'
                  alt='Vehicle front image'
                />
              )}
            </div>
          </div>

          {/* Insurance Company */}
          <div className='mt-2'>
            <label htmlFor='State'>Company</label>
            <br />
            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              placeholder=''
              onChange={(e) => {
                setInsuranceCompany(e.target.value);
              }}
            />
          </div>

          {/* Insurance Policy Number */}
          <div className='mt-2'>
            <label htmlFor='State'>Policy Number</label>
            <br />
            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              placeholder=''
              onChange={(e) => {
                setInsuranceNumber(e.target.value);
              }}
            />
          </div>

          {/* Insurance Expiration */}
          <div className='mt-2'>
            <label htmlFor='State'>Expiration Date</label>
            <br />
            <input
              type='date'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setInsuranceExpiration(e.target.value);
              }}
            />
          </div>

          <button
            id='addBtn'
            onClick={() => {
              navigate("/vehicle/book/addressInfo", {
                replace: true,
                state: {
                  ...location.state,
                  insurance_details: {
                    image: insuranceImage,
                    company: insuranceCompany,
                    number: insuranceNumber,
                    expiration: insuranceExpiration,
                  },
                },
              });
            }}
            className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
          >
            Add Insurance Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookVehicleInsuranceInfo;
