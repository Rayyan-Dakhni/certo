import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../../components/navigation/user/navbar";
import UserSidebar from "../../../components/navigation/user/sidebar";

import { HiCamera } from "react-icons/hi";

const BookVehicleAddressInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState();

  const [address, setAddress] = useState();
  const [addressImage, setAddressImage] = useState();

  const [addressImageUrl, setAddressImageUrl] = useState();

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
        <h2 className='text-2xl font-medium font-sans px-5'>Address Details</h2>

        <div className='p-5'>
          {/* Address */}
          <div className='mt-2'>
            <label htmlFor='State'>Address</label>
            <br />

            <textarea
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
          </div>

          {/* Proof of Address Image */}
          <div>
            <label htmlFor='front image'>Proof of Address</label>
            <br />

            <input
              type='file'
              className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                HandleOnChange(e, setAddressImageUrl, setAddressImage);
              }}
              name='address_image'
            />
            <br />
            <br />

            <div className='w-full h-auto rounded-md border'>
              {!addressImage ? (
                <div className='p-5'>
                  <HiCamera className='mx-auto text-4xl' />
                  <br />
                  <h3 className='text-center'>No image selected</h3>
                </div>
              ) : (
                <img
                  src={addressImageUrl}
                  className='w-full h-full rounded-md'
                  alt='Vehicle front image'
                />
              )}
            </div>
          </div>

          <button
            id='addBtn'
            onClick={() => {
              navigate("/vehicle/book/addOns", {
                replace: true,
                state: {
                  ...location.state,
                  address_details: {
                    address: address,
                    image: addressImage,
                  },
                },
              });
            }}
            className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
          >
            Add Address Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookVehicleAddressInfo;
