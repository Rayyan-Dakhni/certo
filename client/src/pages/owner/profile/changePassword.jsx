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
  HideAlert,
  ShowAlert,
} from "../../../helper/functions";
import apiUrl from "../../../config";
import OwnerNavbar from "../../../components/navigation/owner/navbar";
import OwnerSidebar from "../../../components/navigation/owner/sidebar";

const OwnerChangePassword = () => {
  const authToken = sessionStorage.getItem("token");
  const ownerId = sessionStorage.getItem("owner_id");

  const [alertMessage, setAlertMessage] = useState();

  const [newPassword, setNewPassword] = useState();
  const [rePassword, setRePassword] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      console.log("yaha aya");

      setAlertMessage("User not authenticated. Redirecting...");
      ShowAlert("info");

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);
    }
  }, []);

  function OnSubmit() {
    AddLoaderToBtn("addBtn");

    if (newPassword == rePassword) {
      const updatedPassword = {
        owner_id: ownerId,
        password: newPassword,
      };

      fetch(`${apiUrl}/owner/change/password`, {
        method: "put",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPassword),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setAlertMessage(data.message);

          if (data.success == 1) {
            // show success alert as the vehicle was added
            ShowAlert("success");

            AddTextToBtn("addBtn", "Change Password");

            setTimeout(() => {
              // navigate to add vehicle images
              navigate("/owner/dashboard", {
                replace: true,
              });
            }, 3000);
          }
        });
    } else {
      setAlertMessage("The passwords do not match");

      ShowAlert("info");

      AddTextToBtn("addBtn", "Change Password");

      setTimeout(() => {
        HideAlert("info");
      }, 3000);
    }
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
          Change Password
        </h1>
        <div className='px-5 w-full'>
          <div className='bg-white w-full p-3 rounded-md'>
            {/* New Password */}
            <div className='mt-2'>
              <label htmlFor='Year'>New Password</label>
              <br />
              <input
                type='password'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>

            {/* Re-enter Password */}
            <div className='mt-2'>
              <label htmlFor='Make'>Re-enter Password</label>
              <br />
              <input
                type='password'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
              />
            </div>

            <button
              id='addBtn'
              onClick={OnSubmit}
              className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
            >
              Change Password
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default OwnerChangePassword;
