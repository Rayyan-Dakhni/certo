import React from "react";

import Logo from "../../images/transparent.png";

import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import apiUrl from "../../config";
import SuccessAlert from "../../components/alerts/success";
import ErrorAlert from "../../components/alerts/error";
import InfoAlert from "../../components/alerts/info";

import { HideAlert, ShowAlert } from "../../helper/functions";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [alertMessage, setAlertMessage] = useState();

  const navigate = useNavigate();

  function OnSubmit(e) {
    e.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    console.log(credentials);

    fetch(`${apiUrl}/auth/owners/login`, {
      mode: "cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        console.log(data.found);

        if (data.found === 1) {
          setAlertMessage(data.message);

          if (data.token) {
            const token = data.token;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("owner_id", data.ownerId);

            // show success toast as the owner has already authenticated
            ShowAlert("success");

            setTimeout(() => {
              navigate("/owner/dashboard", { replace: true });
            }, 2000);
          } else {
            // show error toast
            ShowAlert("error");
          }
        } else {
          fetch(`${apiUrl}/auth/users/login`, {
            mode: "cors",
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);

              setAlertMessage(data.message);

              if (data.found === 1) {
                if (data.token) {
                  const token = data.token;
                  sessionStorage.setItem("token", token);

                  // show success toast as the user has authenticated
                  ShowAlert("success");
                } else {
                  // show error toast
                  ShowAlert("error");
                }
              } else {
                // show error toast for no account being found
                ShowAlert("error");
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='w-screen min-h-screen bg-white'>
      {/* Alerts */}
      <SuccessAlert
        id='success'
        heading='Success'
        alertMessage={alertMessage}
      />
      <ErrorAlert id='error' heading='Error' alertMessage={alertMessage} />
      <InfoAlert id='info' heading='Info' alertMessage={alertMessage} />

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
        <br />
        <h1 className='text-center font-semibold font-serif text-3xl'>
          Welcome Back
        </h1>
        <br />
        <br />
        <div className='px-5'>
          <div className=''>
            <label htmlFor='Password'>Email</label>
            <br />
            <input
              type='email'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              placeholder='Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='Password'>Password</label>
            <br />
            <input
              type='password'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <p className='text-right py-2 text-blue-600'>Forgot Password</p>
          <br />
          <button
            onClick={OnSubmit}
            className='w-full bg-gray-900 text-white rounded-md p-3 text-center font-light shadow transition-all hover:bg-opacity-90 active:scale-90'
          >
            Sign Up
          </button>
          <p className='text-center py-5'>OR</p>
          <p className='text-center'>
            Don't have an account?{" "}
            <span className='text-blue-600'>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
