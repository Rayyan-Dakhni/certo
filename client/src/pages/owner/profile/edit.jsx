import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SuccessAlert from "../../../components/alerts/success";
import ErrorAlert from "../../../components/alerts/error";
import InfoAlert from "../../../components/alerts/info";
import {
  AddLoaderToBtn,
  AddTextToBtn,
  ShowAlert,
} from "../../../helper/functions";
import apiUrl from "../../../config";
import OwnerNavbar from "../../../components/navigation/owner/navbar";
import OwnerSidebar from "../../../components/navigation/owner/sidebar";

const OnwerEditProfile = () => {
  const authToken = sessionStorage.getItem("token");
  const ownerId = sessionStorage.getItem("owner_id");

  const [alertMessage, setAlertMessage] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  function GetProfile() {
    fetch(`${apiUrl}/owner/?id=${ownerId}`, {
      method: "get",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setName(data[0].full_name);
        setEmail(data[0].email);
        setPhoneNo(data[0].phone_number);
        setAddress(data[0].address);
      });
  }

  useEffect(() => {
    if (!authToken) {
      setAlertMessage("User not authenticated. Redirecting...");
      ShowAlert("info");

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);
    }

    GetProfile();
  }, []);

  function OnSubmit() {
    AddLoaderToBtn("addBtn");

    const updatedProfile = {
      ownerId: ownerId,
      fullName: name,
      email: email,
      phoneNo: phoneNo,
      address: address,
    };

    fetch(`${apiUrl}/owner/edit`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        if (data.success == 1) {
          // show success alert as the vehicle was added
          ShowAlert("success");

          AddTextToBtn("addBtn", "Update Profile");

          setTimeout(() => {
            // navigate to add vehicle images
            navigate("/owner/dashboard", {
              replace: true,
            });
          }, 3000);
        }
      });
  }

  return (
    <div className='w-full min-h-screen bg-gray-200'>
      {/* Alerts */}
      <SuccessAlert
        id='success'
        heading='Success'
        alertMessage={alertMessage}
      />
      <ErrorAlert id='error' heading='Error' alertMessage={alertMessage} />
      <InfoAlert id='info' heading='Info' alertMessage={alertMessage} />

      {/* Navbar */}
      <OwnerNavbar loggedIn={true} />

      {/* Sidebar */}
      <OwnerSidebar />

      {/* Content */}
      <div>
        <h1 className='text-left font-semibold text-2xl text-black px-10 pt-10 pb-5'>
          Edit Profile
        </h1>
        <div className='px-5 w-full'>
          <div className='bg-white w-full p-3 rounded-md'>
            {/* Full Name */}
            <div className='mt-2'>
              <label htmlFor='Year'>Full Name</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            {/* Email */}
            <div className='mt-2'>
              <label htmlFor='Year'>Email</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Email */}
            <div className='mt-2'>
              <label htmlFor='Year'>Phone Number</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
            </div>

            {/* Address */}
            <div className='mt-2'>
              <label htmlFor='Year'>Address</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <button
              id='addBtn'
              onClick={OnSubmit}
              className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
            >
              Update Profile
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default OnwerEditProfile;
