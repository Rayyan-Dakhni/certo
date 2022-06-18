import React, { useState } from "react";

// importing all icons
import {
  HiUserCircle,
  HiBookOpen,
  HiTicket,
  HiShoppingBag,
  HiUsers,
  HiAnnotation,
  HiLogout,
  HiX,
  HiKey,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { HideSidebar } from "../../../helper/functions";

const UserSidebar = () => {
  const navigate = useNavigate();

  const [profileActive, setProfileActive] = useState(false);
  const [vehiclesActive, setVehiclesActive] = useState(false);
  const [rentalsActive, setRentalsActive] = useState(false);
  const [ticketsActive, setTicketsActive] = useState(false);
  const [walletActive, setWalletActive] = useState(false);

  const HandleDropdownClick = (state, setState, id) => {
    const dropdown = document.getElementById(id);

    // check if the dropdown is currently open
    if (state) {
      // change the value to false
      setState(false);

      // close the dropdown
      dropdown.style.maxHeight = "0";
    } else {
      // change the value to true
      setState(true);

      // open the dropdown
      dropdown.style.maxHeight = "100%";
    }
  };

  return (
    <div
      id='sidebar'
      className='w-72 z-40 h-screen fixed bg-black top-0 right-0 overflow-auto p-5 transition-all duration-500 translate-x-full'
    >
      {/* header */}
      <div className='flex w-full'>
        <h3 className='text-white'>Menu</h3>
        <button
          onClick={() => {
            HideSidebar("sidebar");
          }}
          className='ml-auto text-white p-1 text-xl rounded-full hover:bg-gray-600'
        >
          <HiX />
        </button>
      </div>
      <br />

      {/* Profile */}
      <div className='mt-1'>
        <button
          onClick={() => {
            HandleDropdownClick(profileActive, setProfileActive, "profile");
          }}
          className='w-full flex text-left text-md p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiUserCircle />
          </span>{" "}
          Profile
        </button>
        <div
          id='profile'
          className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'
        >
          <button
            onClick={() => {
              navigate("/owner/profile/edit", { replace: true });
            }}
            className='p-1 w-full text-left'
          >
            Edit Profile
          </button>
          <button
            onClick={() => {
              navigate("/owner/profile/change/password", { replace: true });
            }}
            className='p-1 w-full text-left'
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Manage Vehicles */}
      <div className='mt-3'>
        <button
          onClick={() => {
            HandleDropdownClick(vehiclesActive, setVehiclesActive, "vehicles");
          }}
          className='w-full flex text-left text-md p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiKey />
          </span>{" "}
          Manage Vehicles
        </button>
        <div
          id='vehicles'
          className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'
        >
          <button
            onClick={() => {
              navigate("/owner/vehicles/add");
            }}
            className='p-1 w-full text-left'
          >
            Add Vehicle
          </button>
          <button
            onClick={() => {
              navigate("/owner/vehicles/view");
            }}
            className='p-1 w-full text-left'
          >
            View All Vehicles
          </button>
        </div>
      </div>

      {/* Rentals Booked */}
      <div className='mt-3'>
        <button
          onClick={() => {
            HandleDropdownClick(rentalsActive, setRentalsActive, "rentals");
          }}
          className='w-full flex text-left p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiBookOpen />
          </span>{" "}
          All Rentals Booked
        </button>
        <div
          id='rentals'
          className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'
        >
          <button className='p-1 w-full text-left'>Past Rentals</button>
          <button className='p-1 w-full text-left'>Active Rentals</button>
          <button className='p-1 w-full text-left'>
            Future Rental Requests
          </button>
        </div>
      </div>

      {/* Support Tickets */}
      <div className='mt-3'>
        <button
          onClick={() => {
            HandleDropdownClick(ticketsActive, setTicketsActive, "tickets");
          }}
          className='w-full flex text-left p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiTicket />
          </span>{" "}
          Support Tickets
        </button>
        <div
          id='tickets'
          className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'
        >
          <button className='p-1 w-full text-left'>Closed Tickets</button>
          <button className='p-1 w-full text-left'>Open Tickets</button>
        </div>
      </div>

      {/* Wallet */}
      <div className='mt-3'>
        <button
          onClick={() => {
            HandleDropdownClick(walletActive, setWalletActive, "wallet");
          }}
          className='w-full flex text-left p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiShoppingBag />
          </span>{" "}
          Wallet
        </button>
        <div
          id='wallet'
          className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'
        >
          <button className='p-1 w-full text-left'>Add Balance</button>
          <button className='p-1 w-full text-left'>View Points</button>
        </div>
      </div>

      {/* About Us */}
      <div className='mt-3'>
        <button
          onClick={() => {
            // navigate to about us page
          }}
          className='w-full flex text-left p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiUsers />
          </span>{" "}
          About Us
        </button>
      </div>

      {/* Notifications */}
      <div className='mt-3'>
        <button
          onClick={() => {
            // navigate to notifications page
          }}
          className='w-full flex text-left p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiAnnotation />
          </span>{" "}
          Notifications
        </button>
      </div>

      {/* Login */}
      <div className='mt-3'>
        <button
          onClick={() => {
            // logout then navigate to login
          }}
          className='w-full flex text-left p-2 text-white rounded-md'
        >
          <span className='text-lg pr-2 mt-1'>
            <HiLogout />
          </span>{" "}
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
