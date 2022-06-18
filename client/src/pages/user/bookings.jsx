import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineSearch,
  HiStar,
} from "react-icons/hi";
import UserNavbar from "../../components/navigation/user/navbar";
import UserSidebar from "../../components/navigation/user/sidebar";

import apiUrl from "../../config";

import RentalCar from "../../images/rental_car.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";

const UserBookings = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const [loggedIn, setLoggedIn] = useState(false);

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  function GetAllVehicles() {
    fetch(`${apiUrl}/vehicles/`, {
      method: "get",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setVehicles(data);
      });
  }

  useEffect(() => {
    GetAllVehicles();
  }, []);

  return (
    <div>
      <UserNavbar loggedIn={loggedIn} />
      <UserSidebar />

      <br />
      <h1 className='text-center font-serif font-semibold text-3xl'>
        Let's Find Your <br /> Drive
      </h1>
      <br />
      <img src={RentalCar} className='w-2/3 mx-auto' alt='' />
      <br />
      <div className='p-5 z-20 w-5/6 mx-auto shadow rounded-2xl'>
        <div className='w-full sm:flex sm:space-x-5'>
          <div className='flex items-center space-x-5 sm:border-r sm:px-5 sm:pr-10'>
            <div>
              <HiOutlineLocationMarker className='text-2xl' />
            </div>
            <div>
              <h4 className='text-sm'>WHERE</h4>
              <input
                type='text'
                className='appearance-none py-1 font-light focus:outline-none'
                placeholder='Enter Your Location'
              />
            </div>
          </div>
          {/* <br className='sm:hidden' /> */}
          <div className='flex items-center space-x-5 sm:border-r sm:px-5 sm:pr-10 py-2'>
            <div>
              <HiOutlineCalendar className='text-2xl' />
            </div>
            <div>
              <h4 className='text-sm'>FROM</h4>
              <input
                type='date'
                className='appearance-none py-1 font-light focus:outline-none'
              />
            </div>
            <div>
              <h4 className='text-sm'>TIME</h4>
              <input
                type='time'
                placeholder='Hello'
                className='appearance-none py-1 font-light focus:outline-none'
              />
            </div>
          </div>
          {/* <br className='sm:hidden' /> */}
          <div className='flex items-center space-x-5 sm:border-r sm:px-5 sm:pr-10'>
            <div>
              <HiOutlineCalendar className='text-2xl' />
            </div>
            <div>
              <h4 className='text-sm'>UNTIL</h4>
              <input
                type='date'
                className='appearance-none py-1 font-light focus:outline-none'
              />
            </div>
            <div>
              <h4 className='text-sm'>TIME</h4>
              <input
                type='time'
                className='appearance-none py-1 font-light focus:outline-none'
              />
            </div>
          </div>
          {/* <br className='sm:hidden' /> */}
          <div className='w-full text-center pt-1'>
            <button className='w-full bg-black text-white text-center border rounded-full p-4'>
              <HiOutlineSearch className='mx-auto' />
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className='p-5 px-10'>
        {vehicles.map((vehicle, index) => {
          return (
            <div key={index} className='mt-4 rounded-xl shadow-md'>
              {/* Slider */}
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[FreeMode, Navigation, Autoplay]}
                className='mySwiper'
              >
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.front_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.back_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.left_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.right_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.front_seats_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.rear_seats_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.dashboard_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${apiUrl}/images/${vehicle.console_image}`}
                    className='w-full h-56 rounded-t-xl'
                  />
                </SwiperSlide>
              </Swiper>

              <div
                onClick={() => {
                  navigate("/vehicle/view", {
                    replace: true,
                    state: { vehicle: vehicle },
                  });
                }}
                className='p-5 cursor-pointer'
              >
                <h3 className='font-bold text-xl'>
                  {vehicle.make} {vehicle.model} {vehicle.year}
                </h3>
                <p className='flex'>
                  5.0 <HiStar className='mt-1 mx-1' /> (9 trips)
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserBookings;
