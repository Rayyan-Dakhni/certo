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
  HiUser,
} from "react-icons/hi";

const OwnerViewCustomers = () => {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
      {/* Navbar */}
      <div className='flex w-full p-2 px-5 bg-black'>
        <img src={Logo} className='w-16 h-auto' alt='' />

        <div className='ml-auto'>
          <div className='flex space-x-3 text-white text-xl pt-3'>
            <button className='p-1 rounded-full bg-black hover:bg-gray-600'>
              <HiPhone />
            </button>
            <button className='p-1'>
              <HiQuestionMarkCircle />
            </button>
            <button className='p-1'>
              <HiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className='w-72 h-screen fixed bg-black top-0 right-0 overflow-auto p-5 transition-all duration-700 translate-x-full'>
        <div className='flex w-full'>
          <h3 className='text-white'>Menu</h3>
          <button className='ml-auto text-white p-1 text-xl rounded-full hover:bg-gray-600'>
            <HiX />
          </button>
        </div>
        <br />

        <div className='mt-1'>
          <button className='w-full flex text-left text-md p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiUserCircle />
            </span>{" "}
            Profile
          </button>
          <div className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'>
            <button className='p-1 w-full text-left'>Edit Profile</button>
            <button className='p-1 w-full text-left'>Change Password</button>
          </div>
        </div>

        <div className='mt-1'>
          <button className='w-full flex text-left text-md p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiKey />
            </span>{" "}
            Manage Vehicles
          </button>
          <div className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'>
            <button className='p-1 w-full text-left'>Add Vehicle</button>
            <button className='p-1 w-full text-left'>View All Vehicles</button>
          </div>
        </div>

        <div className='mt-1'>
          <button className='w-full flex text-left p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiBookOpen />
            </span>{" "}
            All Rentals Booked
          </button>
          <div className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'>
            <button className='p-1 w-full text-left'>Past Rentals</button>
            <button className='p-1 w-full text-left'>Active Rentals</button>
            <button className='p-1 w-full text-left'>
              Future Rental Requests
            </button>
          </div>
        </div>

        <div className='mt-1'>
          <button className='w-full flex text-left p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiTicket />
            </span>{" "}
            Support Tickets
          </button>
          <div className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'>
            <button className='p-1 w-full text-left'>Closed Tickets</button>
            <button className='p-1 w-full text-left'>Open Tickets</button>
          </div>
        </div>

        <div className='mt-1'>
          <button className='w-full flex text-left p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiShoppingBag />
            </span>{" "}
            Wallet
          </button>
          <div className='w-full flex-col space-y-0 px-6 text-gray-400 transition-all max-h-0 overflow-hidden'>
            <button className='p-1 w-full text-left'>Add Balance</button>
            <button className='p-1 w-full text-left'>View Points</button>
          </div>
        </div>

        <div className='mt-1'>
          <button className='w-full flex text-left p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiUsers />
            </span>{" "}
            About Us
          </button>
        </div>

        <div className='mt-1'>
          <button className='w-full flex text-left p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiAnnotation />
            </span>{" "}
            Notifications
          </button>
        </div>

        <div className='mt-1'>
          <button className='w-full flex text-left p-2 text-white rounded-md'>
            <span className='text-lg pr-2 mt-1'>
              <HiLogout />
            </span>{" "}
            Log Out
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        <h1 className='text-left font-semibold text-2xl text-black px-10 pt-10 pb-5'>
          View All Customers
        </h1>
        <div className='px-5 w-full'>
          <div className='w-full bg-white rounded-md p-5'>
            <div className='grid grid-cols-2 gap-4'>
              {/* Full Name */}
              <div>
                <label htmlFor='Year'>Full Name</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='Rayyan Dakhni'
                  readOnly
                />
              </div>

              <div className='text-6xl text-center w-full pt-2'>
                <HiUsers className='mx-auto' />
              </div>

              {/* Email */}
              <div className='col-span-2'>
                <label htmlFor='email'>Email</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='rayyand62@gmail.com'
                  readOnly
                />
              </div>

              {/* Phone */}
              <div className='col-span-2'>
                <label htmlFor='phone'>Phone</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='+92-3312221445'
                  readOnly
                />
              </div>

              <div className='col-span-2'>
                <br />
                <h3 className='font-semibold'>Insurance Details</h3>
              </div>

              {/* Insurance Company */}
              <div>
                <label htmlFor='insurance_company'>Insurance Company</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='NAS'
                  readOnly
                />
              </div>

              {/* Policy Expiry */}
              <div>
                <label htmlFor='expiry'>Policy Expiry</label>
                <br />
                <input
                  type='date'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='2022-09-12'
                  readOnly
                />
              </div>

              {/* Policy Number */}
              <div className='col-span-2'>
                <label htmlFor='policy_number'>Insurance Policy Number</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='4244486574454'
                  readOnly
                />
              </div>

              <div className='col-span-2'>
                <br />
                <h3 className='font-semibold'>Driving License Details</h3>
              </div>

              {/* DL image */}
              <div className='col-span-2'>
                <label htmlFor='dl_image'>Driving License Image</label>
                <br />
                <img
                  src='https://aroundodisha.com/wp-content/uploads/2021/04/dl.jpg'
                  className='w-full h-auto rounded-md mt-1'
                  alt=''
                />
              </div>

              {/* DL Number */}
              <div className='col-span-2'>
                <label htmlFor='dl_number'>Driving License Number</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='4244486574454'
                  readOnly
                />
              </div>

              {/* State/Country */}
              <div>
                <label htmlFor='state'>State/Country</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='New York'
                  readOnly
                />
              </div>

              {/* DL expiry */}
              <div>
                <label htmlFor='dl_expiry'>Expiry</label>
                <br />
                <input
                  type='date'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='2031-04-10'
                  readOnly
                />
              </div>
            </div>
          </div>
          <br />
          <div className='w-full bg-white rounded-md p-5'>
            <div className='grid grid-cols-2 gap-4'>
              {/* Full Name */}
              <div>
                <label htmlFor='Year'>Full Name</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='Rayyan Dakhni'
                  readOnly
                />
              </div>

              <div className='text-6xl text-center w-full pt-2'>
                <HiUsers className='mx-auto' />
              </div>

              {/* Email */}
              <div className='col-span-2'>
                <label htmlFor='email'>Email</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='rayyand62@gmail.com'
                  readOnly
                />
              </div>

              {/* Phone */}
              <div className='col-span-2'>
                <label htmlFor='phone'>Phone</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='+92-3312221445'
                  readOnly
                />
              </div>

              <div className='col-span-2'>
                <br />
                <h3 className='font-semibold'>Insurance Details</h3>
              </div>

              {/* Insurance Company */}
              <div>
                <label htmlFor='insurance_company'>Insurance Company</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='NAS'
                  readOnly
                />
              </div>

              {/* Policy Expiry */}
              <div>
                <label htmlFor='expiry'>Policy Expiry</label>
                <br />
                <input
                  type='date'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='2022-09-12'
                  readOnly
                />
              </div>

              {/* Policy Number */}
              <div className='col-span-2'>
                <label htmlFor='policy_number'>Insurance Policy Number</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='4244486574454'
                  readOnly
                />
              </div>

              <div className='col-span-2'>
                <br />
                <h3 className='font-semibold'>Driving License Details</h3>
              </div>

              {/* DL image */}
              <div className='col-span-2'>
                <label htmlFor='dl_image'>Driving License Image</label>
                <br />
                <img
                  src='https://aroundodisha.com/wp-content/uploads/2021/04/dl.jpg'
                  className='w-full h-auto rounded-md mt-1'
                  alt=''
                />
              </div>

              {/* DL Number */}
              <div className='col-span-2'>
                <label htmlFor='dl_number'>Driving License Number</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='4244486574454'
                  readOnly
                />
              </div>

              {/* State/Country */}
              <div>
                <label htmlFor='state'>State/Country</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='New York'
                  readOnly
                />
              </div>

              {/* DL expiry */}
              <div>
                <label htmlFor='dl_expiry'>Expiry</label>
                <br />
                <input
                  type='date'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='2031-04-10'
                  readOnly
                />
              </div>
            </div>
          </div>
          <br />
          <div className='w-full bg-white rounded-md p-5'>
            <div className='grid grid-cols-2 gap-4'>
              {/* Full Name */}
              <div>
                <label htmlFor='Year'>Full Name</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='Rayyan Dakhni'
                  readOnly
                />
              </div>

              <div className='text-6xl text-center w-full pt-2'>
                <HiUsers className='mx-auto' />
              </div>

              {/* Email */}
              <div className='col-span-2'>
                <label htmlFor='email'>Email</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='rayyand62@gmail.com'
                  readOnly
                />
              </div>

              {/* Phone */}
              <div className='col-span-2'>
                <label htmlFor='phone'>Phone</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='+92-3312221445'
                  readOnly
                />
              </div>

              <div className='col-span-2'>
                <br />
                <h3 className='font-semibold'>Insurance Details</h3>
              </div>

              {/* Insurance Company */}
              <div>
                <label htmlFor='insurance_company'>Insurance Company</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='NAS'
                  readOnly
                />
              </div>

              {/* Policy Expiry */}
              <div>
                <label htmlFor='expiry'>Policy Expiry</label>
                <br />
                <input
                  type='date'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='2022-09-12'
                  readOnly
                />
              </div>

              {/* Policy Number */}
              <div className='col-span-2'>
                <label htmlFor='policy_number'>Insurance Policy Number</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='4244486574454'
                  readOnly
                />
              </div>

              <div className='col-span-2'>
                <br />
                <h3 className='font-semibold'>Driving License Details</h3>
              </div>

              {/* DL image */}
              <div className='col-span-2'>
                <label htmlFor='dl_image'>Driving License Image</label>
                <br />
                <img
                  src='https://aroundodisha.com/wp-content/uploads/2021/04/dl.jpg'
                  className='w-full h-auto rounded-md mt-1'
                  alt=''
                />
              </div>

              {/* DL Number */}
              <div className='col-span-2'>
                <label htmlFor='dl_number'>Driving License Number</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='4244486574454'
                  readOnly
                />
              </div>

              {/* State/Country */}
              <div>
                <label htmlFor='state'>State/Country</label>
                <br />
                <input
                  type='text'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='New York'
                  readOnly
                />
              </div>

              {/* DL expiry */}
              <div>
                <label htmlFor='dl_expiry'>Expiry</label>
                <br />
                <input
                  type='date'
                  className='border w-full bg-gray-100 p-2 px-5 rounded-md mt-1 appearance-none focus:outline-none focus:border-gray-900 font-light'
                  value='2031-04-10'
                  readOnly
                />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default OwnerViewCustomers;
