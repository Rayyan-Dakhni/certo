import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../../components/alerts/success";
import ErrorAlert from "../../../components/alerts/error";
import InfoAlert from "../../../components/alerts/info";
import {
  AddLoaderToBtn,
  AddTextToBtn,
  ShowAlert,
} from "../../../helper/functions";
import OwnerNavbar from "../../../components/navigation/owner/navbar";

const OwnerSignup = () => {
  const [fullName, setFullName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  const [alertMessage, setAlertMessage] = useState();

  const navigate = useNavigate();

  function OnSubmit() {
    AddLoaderToBtn("signupBtn");

    const owner = {
      fullName: fullName,
      phoneNo: phoneNo,
      email: email,
      address: address,
    };

    fetch("http://localhost:5000/owner/signup", {
      mode: "cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(owner),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        if (data.found) {
          // show alert
          ShowAlert("info");

          AddTextToBtn("signupBtn", "Sign Up");
        } else {
          if (data.success) {
            if (data.success === 1) {
              // show success alert
              ShowAlert("success");

              AddTextToBtn("signupBtn", "Sign Up");

              setTimeout(() => {
                // redirect to login page

                navigate("/login", { replace: true });
              }, 4000);
            }
          } else {
            // show error alert
            ShowAlert("error");

            AddTextToBtn("signupBtn", "Sign Up");
          }
        }
      });
  }

  return (
    <div className='w-screen min-h-screen bg-white pb-10'>
      {/* Alerts */}
      <SuccessAlert
        id='success'
        heading='Success'
        alertMessage={alertMessage}
      />
      <ErrorAlert id='error' heading='Error' alertMessage={alertMessage} />
      <InfoAlert id='info' heading='Info' alertMessage={alertMessage} />

      {/* Navbar */}
      <OwnerNavbar loggedIn={false} />

      <div className='w-full bg-white h-auto p-5'>
        <br />
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
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Phone Number</label>
            <br />
            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Email</label>
            <br />
            <input
              type='email'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Address</label>
            <br />
            <textarea
              name=''
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              rows='2'
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
          </div>
          <div className='py-2 flex'>
            <input
              type='checkbox'
              className='appearance-none border w-5 rounded mt-1 transition-all checked:bg-black'
            />
            <p className='pl-2 text-md'>
              I agree to the{" "}
              <span className='text-blue-600'>Terms & Conditions</span>
            </p>
          </div>
          <br />
          <button
            id='signupBtn'
            onClick={OnSubmit}
            className='w-full bg-gray-900 text-white rounded-md p-3 text-center font-light shadow transition-all hover:bg-opacity-90 active:scale-90'
          >
            Sign Up
          </button>

          <br />
          <br />

          <p className='text-center'>
            Have an account already?{" "}
            <span
              onClick={() => {
                navigate("/login", { replace: true });
              }}
              className='text-blue-600 cursor-pointer'
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerSignup;
