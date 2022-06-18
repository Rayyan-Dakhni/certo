import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../../components/navigation/user/navbar";
import UserSidebar from "../../../components/navigation/user/sidebar";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";
import apiUrl from "../../../config";

const VehicleDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState();

  const [vehicle, setVehicle] = useState(location.state.vehicle);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className='w-screen min-h-screen'>
      <UserNavbar loggedIn={loggedIn} />
      <UserSidebar />

      {/* Content */}
      <div className='p-5'>
        <h2 className='text-2xl font-medium font-sans px-5'>Vehicle Details</h2>

        <br />

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
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${apiUrl}/images/${vehicle.back_image}`}
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${apiUrl}/images/${vehicle.left_image}`}
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${apiUrl}/images/${vehicle.right_image}`}
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${apiUrl}/images/${vehicle.front_seats_image}`}
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${apiUrl}/images/${vehicle.rear_seats_image}`}
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${apiUrl}/images/${vehicle.dashboard_image}`}
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${apiUrl}/images/${vehicle.console_image}`}
              className='w-full h-56 rounded-xl'
            />
          </SwiperSlide>
        </Swiper>

        <br />

        <h4 className='text-xl font-semibold text-center'>
          {`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
        </h4>
        <br />
        <div className='text-lg grid grid-cols-2 gap-4 p-5'>
          <p>
            <b>Body:</b> <br /> {vehicle.body}
          </p>

          <p>
            <b>Color:</b> <br /> {vehicle.color}
          </p>

          <p>
            <b>Doors:</b> <br /> {vehicle.no_of_doors}
          </p>

          <p>
            <b>Seats:</b> <br /> {vehicle.seats}
          </p>

          <p>
            <b>Fuel Type:</b> <br /> {vehicle.fuel_type}
          </p>

          <p>
            <b>Transmission:</b> <br /> {vehicle.transmission}
          </p>

          <p>
            <b>FWD or AWD:</b> <br /> {vehicle.fwd_or_awd}
          </p>

          <p>
            <b>Price/hour:</b> <br /> ${vehicle.price_per_hour}
          </p>

          <p>
            <b>Price/day:</b> <br /> ${vehicle.price_per_day}
          </p>

          <p>
            <b>Price/week:</b> <br /> ${vehicle.price_per_week}
          </p>
        </div>

        <hr />

        <div className='p-5'>
          <button
            onClick={() => {
              navigate("/vehicle/book/details", {
                replace: true,
                state: {
                  vehicle_id: vehicle.vehicle_id,
                  price_per_day: vehicle.price_per_day,
                  price_per_hour: vehicle.price_per_hour,
                  price_per_week: vehicle.price_per_week,
                  owner_id: vehicle.owner_id,
                },
              });
            }}
            className='bg-gray-900 rounded-md text-white w-full p-3 transition-all hover:bg-opacity-90 trasnform active:scale-95'
          >
            Choose Vehicle
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
