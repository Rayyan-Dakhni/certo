import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../../components/navigation/user/navbar";
import UserSidebar from "../../../components/navigation/user/sidebar";

import apiUrl from "../../../config";

const BookVehicleAddOns = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState();

  const [addOns, setAddOns] = useState([]);

  const [preFillFuel, setPreFillFuel] = useState(false);
  const [preBasicCleaning, setPreBasicCleaning] = useState(false);
  const [unlimitedTolls, setUnlimitedTolls] = useState(false);

  function GetAddOns() {
    fetch(`${apiUrl}/addOns/`, {
      method: "get",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAddOns(data);
      });
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    GetAddOns();
  }, []);

  return (
    <div className='w-screen min-h-screen'>
      <UserNavbar loggedIn={loggedIn} />
      <UserSidebar />

      {/* Content */}
      <div className='p-5'>
        <h2 className='text-2xl font-medium font-sans px-5'>Add-Ons</h2>

        <div className='p-5'>
          {/* Pre fill fuel */}
          <div className='py-2 flex'>
            <input
              type='checkbox'
              className='appearance-none border border-black h-5 w-5 rounded mt-1 checked:bg-black'
              onChange={(e) => {
                setPreFillFuel(e.target.value);
              }}
              value={preFillFuel}
            />
            <p className='pl-2 text-md'>
              Buy Pre-fill fuel for an extra{" "}
              <span className='text-blue-600'>$9.99/day</span>
            </p>
          </div>

          {/* Pre Basic Cleaning */}
          <div className='py-2 flex'>
            <input
              type='checkbox'
              className='appearance-none border border-black h-5 w-5 rounded mt-1 checked:bg-black'
              onChange={(e) => {
                setPreBasicCleaning(e.target.value);
              }}
              value={preBasicCleaning}
            />
            <p className='pl-2 text-md'>
              Buy Pre-basic cleaning for an extra{" "}
              <span className='text-blue-600'>$9.99/day</span>
            </p>
          </div>

          {/* Unlimited Tolls */}
          <div className='py-2 flex'>
            <input
              type='checkbox'
              className='appearance-none border border-black h-5 w-5 rounded mt-1 checked:bg-black'
              onChange={(e) => {
                setUnlimitedTolls(e.target.value);
              }}
              value={unlimitedTolls}
            />
            <p className='pl-2 text-md'>
              Buy Unlimited tolls for an extra{" "}
              <span className='text-blue-600'>$9.99/day</span>
            </p>
          </div>

          <button
            id='addBtn'
            onClick={() => {
              console.log({
                pre_fill_fuel: preFillFuel,
                pre_basic_cleaning: preBasicCleaning,
                unlimited_tolls: unlimitedTolls,
              });

              // navigate("/vehicle/book/extraDriver", {
              //   replace: true,
              //   state: {
              //     ...location.state,
              //   },
              // });
            }}
            className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
          >
            Add Add-Ons
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookVehicleAddOns;
