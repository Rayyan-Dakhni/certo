import React from "react";

import Logo from "../../../images/transparent.png";

import {
  HiPhone,
  HiQuestionMarkCircle,
  HiMenu,
  HiUserCircle,
  HiBookOpen,
  HiUsers,
  HiAnnotation,
  HiLogout,
  HiTicket,
  HiShoppingBag,
  HiKey,
  HiX,
} from "react-icons/hi";
import { useState } from "react";
import apiUrl from "../../../config";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";
import OwnerSidebar from "../../../components/navigation/owner/sidebar";
import OwnerNavbar from "../../../components/navigation/owner/navbar";

const OwnerViewVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  function FetchAllVehicles() {
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
    FetchAllVehicles();
  }, []);

  return (
    <div className='w-full min-h-screen bg-gray-200'>
      {/* Navbar */}
      <OwnerNavbar loggedIn={true} />

      {/* Sidebar */}
      <OwnerSidebar />

      {/* Content */}
      <div>
        <h1 className='text-left font-semibold text-2xl text-black px-10 pt-10'>
          View All Vehicles
        </h1>
        <div className='px-5 w-full'>
          {vehicles.map((vehicle) => {
            return (
              <div
                key={vehicle.vehicle_id}
                className='w-full bg-white rounded-md p-5 mt-5'
              >
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
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${apiUrl}/images/${vehicle.back_image}`}
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${apiUrl}/images/${vehicle.left_image}`}
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${apiUrl}/images/${vehicle.right_image}`}
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${apiUrl}/images/${vehicle.front_seats_image}`}
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${apiUrl}/images/${vehicle.rear_seats_image}`}
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${apiUrl}/images/${vehicle.dashboard_image}`}
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${apiUrl}/images/${vehicle.console_image}`}
                      className='w-full h-56'
                    />
                  </SwiperSlide>
                </Swiper>

                <br />

                <div className='grid grid-cols-2 gap-4'>
                  {/* Year */}
                  <div>
                    <label htmlFor='Year'>Year</label>
                    <br />
                    <input
                      type='number'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.year}
                      readOnly
                    />
                  </div>

                  {/* Make */}
                  <div>
                    <label htmlFor='Make'>Make</label>
                    <br />
                    <input
                      type='text'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.make}
                      readOnly
                    />
                  </div>

                  {/* Model */}
                  <div>
                    <label htmlFor='Model'>Model</label>
                    <br />
                    <input
                      type='text'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.make}
                      readOnly
                    />
                  </div>

                  {/* Body */}
                  <div>
                    <label htmlFor='Body'>Body</label>
                    <br />
                    <input
                      type='text'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.body}
                      readOnly
                    />
                  </div>

                  {/* Color */}
                  <div>
                    <label htmlFor='Color'>Color</label>
                    <br />
                    <input
                      type='text'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.color}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='Doors'>Number of Doors</label>
                    <br />
                    <input
                      type='number'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.no_of_doors}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='Seats'>Seats</label>
                    <br />
                    <input
                      type='number'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.seats}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='Fuel'>Fuel Type</label>
                    <br />
                    <input
                      type='text'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.fuel_type}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='Transmission'>Transmission</label>
                    <br />
                    <input
                      type='text'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.transmission}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='AWD'>FWD or AWD</label>
                    <br />
                    <input
                      type='text'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.fwd_or_awd}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='price/hour'>Price per hour ($)</label>
                    <br />
                    <input
                      type='number'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.price_per_hour}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='price/day'>Price per day ($)</label>
                    <br />
                    <input
                      type='number'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.price_per_day}
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor='price/week'>Price per week ($)</label>
                    <br />
                    <input
                      type='number'
                      className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                      value={vehicle.price_per_week}
                      readOnly
                    />
                  </div>

                  <div className='relative'>
                    <button className='w-full p-3 bg-black text-white rounded-md absolute bottom-0 left-0'>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <br />
        </div>
      </div>
    </div>
  );
};

export default OwnerViewVehicles;
