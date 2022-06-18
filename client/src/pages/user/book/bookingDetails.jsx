import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../../components/navigation/user/navbar";
import UserSidebar from "../../../components/navigation/user/sidebar";

const BookVehicleBookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState();

  const vehicleId = location.state.vehicle_id;
  const pricePerDay = location.state.price_per_day;
  const pricePerHour = location.state.price_per_hour;
  const pricePerWeek = location.state.price_per_week;
  const ownerId = location.state.owner_id;

  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endDate, setEndDate] = useState();
  const [endTime, setEndTime] = useState();

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
        <h2 className='text-2xl font-medium font-sans px-5'>Booking Details</h2>

        <div className='p-5'>
          {/* Location */}
          <div className='mt-2'>
            <label htmlFor='State'>City/State</label>
            <br />

            <input
              type='text'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>

          {/* Start Date */}
          <div className='mt-2'>
            <label htmlFor='State'>Start Date</label>
            <br />

            <input
              type='date'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>

          {/* Start Date */}
          <div className='mt-2'>
            <label htmlFor='State'>Start Time</label>
            <br />

            <input
              type='time'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
            />
          </div>

          {/* End Date */}
          <div className='mt-2'>
            <label htmlFor='State'>End Date</label>
            <br />

            <input
              type='date'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>

          {/* Start Date */}
          <div className='mt-2'>
            <label htmlFor='State'>End Time</label>
            <br />

            <input
              type='time'
              className='border w-full p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
              onChange={(e) => {
                setEndTime(e.target.value);
              }}
            />
          </div>

          <button
            id='addBtn'
            onClick={() => {
              navigate("/vehicle/book/employerInfo", {
                replace: true,
                state: {
                  ...location.state,
                  booking_duration_details: {
                    city: city,
                    start_date: startDate,
                    start_time: startTime,
                    end_date: endDate,
                    end_time: endTime,
                  },
                },
              });
            }}
            className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
          >
            Add Booking Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookVehicleBookingDetails;
