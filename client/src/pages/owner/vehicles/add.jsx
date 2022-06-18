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

const OwnerAddVehicle = () => {
  const authToken = sessionStorage.getItem("token");

  const [alertMessage, setAlertMessage] = useState();

  const [year, setYear] = useState();
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [body, setBody] = useState();
  const [color, setColor] = useState();
  const [noOfDoors, setNoOfDoors] = useState();
  const [seats, setSeats] = useState();
  const [fuelType, setFuelType] = useState();
  const [transmission, setTransmission] = useState();
  const [fwdOrAwd, setFwdOrAwd] = useState();
  const [pricePerHour, setPricePerHour] = useState();
  const [pricePerDay, setPricePerDay] = useState();
  const [pricePerWeek, setPricePerWeek] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      console.log("yaha aya");

      setAlertMessage("User not authenticated. Redirecting...");
      ShowAlert("info");

      setTimeout(() => {
        navigate("../../../login", { replace: true });
      }, 3000);
    }
  }, []);

  function OnSubmit() {
    AddLoaderToBtn("addBtn");

    if (year || make) {
      const newVehicle = {
        year: year,
        make: make,
        model: model,
        body: body,
        color: color,
        noOfDoors: noOfDoors,
        seats: seats,
        fuelType: fuelType,
        transmission: transmission,
        fwdOrAwd: fwdOrAwd,
        pricePerHour: pricePerHour,
        pricePerDay: pricePerDay,
        pricePerWeek: pricePerWeek,
      };

      console.log(newVehicle);

      fetch(`${apiUrl}/vehicles/add`, {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVehicle),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setAlertMessage(data.message);

          if (data.success == 1) {
            // show success alert as the vehicle was added
            ShowAlert("success");

            AddTextToBtn("addBtn", "Add Vehicle");

            const vehicle_id = data.result.insertId;

            console.log(vehicle_id);

            setTimeout(() => {
              // navigate to add vehicle images
              navigate("/owner/vehicles/images/add", {
                replace: true,
                state: {
                  vehicleId: vehicle_id,
                },
              });
            }, 3000);
          }
        });
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
          Add New Vehicle
        </h1>
        <div className='px-5 w-full'>
          <div className='bg-white w-full p-3 grid grid-cols-2 gap-4 rounded-md'>
            {/* Year */}
            <div className='mt-2'>
              <label htmlFor='Year'>Year</label>
              <br />
              <input
                type='number'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. 2022'
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </div>

            {/* Make */}
            <div className='mt-2'>
              <label htmlFor='Make'>Make</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. Honda'
                onChange={(e) => {
                  setMake(e.target.value);
                }}
              />
            </div>

            {/* Model */}
            <div className='mt-2'>
              <label htmlFor='Model'>Model</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. Civic'
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
            </div>

            {/* Body */}
            <div className='mt-2'>
              <label htmlFor='Body'>Body</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. Sedan'
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </div>

            {/* Color */}
            <div className='mt-2 col-span-2'>
              <label htmlFor='Color'>Color</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. Black'
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>

            {/* Number of Doors */}
            <div className='mt-2'>
              <label htmlFor='Doors'>Number of Doors</label>
              <br />
              <input
                type='number'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. 4'
                onChange={(e) => {
                  setNoOfDoors(e.target.value);
                }}
              />
            </div>

            {/* Seats */}
            <div className='mt-2'>
              <label htmlFor='Doors'>Seats</label>
              <br />
              <input
                type='number'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. 5'
                onChange={(e) => {
                  setSeats(e.target.value);
                }}
              />
            </div>

            {/* Fuel Type */}
            <div className='mt-2 col-span-2'>
              <label htmlFor='Fuel'>Fuel Type</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. Diesel'
                onChange={(e) => {
                  setFuelType(e.target.value);
                }}
              />
            </div>

            {/* Transmission */}
            <div className='mt-2'>
              <label htmlFor='Transmission'>Transmission</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. CVT'
                onChange={(e) => {
                  setTransmission(e.target.value);
                }}
              />
            </div>

            {/* FWD or AWD */}
            <div className='mt-2'>
              <label htmlFor='Drive'>FWD or AWD</label>
              <br />
              <input
                type='text'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. AWD'
                onChange={(e) => {
                  setFwdOrAwd(e.target.value);
                }}
              />
            </div>

            {/* Price/hour */}
            <div className='mt-2'>
              <label htmlFor='Price/hour'>Price per hour (dollars)</label>
              <br />
              <input
                type='number'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. 20'
                onChange={(e) => {
                  setPricePerHour(e.target.value);
                }}
              />
            </div>

            {/* Price/day */}
            <div className='mt-2'>
              <label htmlFor='price/day'>Price per day (dollars)</label>
              <br />
              <input
                type='number'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. 50'
                onChange={(e) => {
                  setPricePerDay(e.target.value);
                }}
              />
            </div>

            {/* Price/week */}
            <div className='mt-2 col-span-2'>
              <label htmlFor='price/week'>Price per week (dollars) </label>
              <br />
              <input
                type='number'
                className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                placeholder='eg. 140'
                onChange={(e) => {
                  setPricePerWeek(e.target.value);
                }}
              />
            </div>

            <button
              id='addBtn'
              onClick={OnSubmit}
              className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
            >
              Add Vehicle
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default OwnerAddVehicle;
