import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import OwnerReviewBookings from "./pages/owner/bookings/review";
import OwnerAddCustomers from "./pages/owner/customers/add";
import OwnerViewCustomers from "./pages/owner/customers/view";
import OwnerAddVehicle from "./pages/owner/vehicles/add";
import OwnerViewVehicles from "./pages/owner/vehicles/view";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import UserBookings from "./pages/user/bookings";
import OwnerSignup from "./pages/owner/register/signup";
import OwnerAddVehicleImages from "./pages/owner/vehicles/addImages";
import OwnerDashboard from "./pages/owner/home";
import OwnerChangePassword from "./pages/owner/profile/changePassword";
import OnwerEditProfile from "./pages/owner/profile/edit";
import VehicleDetails from "./pages/user/book/vehicleDetails";
import BookVehicleDlInfo from "./pages/user/book/DlInfo";
import BookVehicleInsuranceInfo from "./pages/user/book/InsuranceInfo";
import BookVehicleAddressInfo from "./pages/user/book/AddressInfo";
import BookVehicleEmployerInfo from "./pages/user/book/EmployerInfo";
import BookVehicleAddOns from "./pages/user/book/addOns";
import BookVehicleBookingDetails from "./pages/user/book/bookingDetails";

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/book' element={<UserBookings />} />
        <Route path='/vehicle/view' element={<VehicleDetails />} />
        <Route path='/vehicle/book/dlInfo' element={<BookVehicleDlInfo />} />
        <Route
          path='/vehicle/book/details'
          element={<BookVehicleBookingDetails />}
        />
        <Route
          path='/vehicle/book/insuranceInfo'
          element={<BookVehicleInsuranceInfo />}
        />
        <Route
          path='/vehicle/book/addressInfo'
          element={<BookVehicleAddressInfo />}
        />
        <Route
          path='/vehicle/book/employerInfo'
          element={<BookVehicleEmployerInfo />}
        />
        <Route path='/vehicle/book/addOns' element={<BookVehicleAddOns />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* Owner routes */}
        {/* <Route path='/owner/login' element={<OwnerLogin />} /> */}
        <Route path='/owner/signup' element={<OwnerSignup />} />

        <Route path='/owner/dashboard' element={<OwnerDashboard />} />

        <Route
          path='/owner/profile/change/password'
          element={<OwnerChangePassword />}
        />
        <Route path='/owner/profile/edit' element={<OnwerEditProfile />} />

        <Route path='/owner/vehicles/add' element={<OwnerAddVehicle />} />
        <Route path='/owner/vehicles/view' element={<OwnerViewVehicles />} />
        <Route path='/owner/vehicles/edit' />
        <Route
          path='/owner/vehicles/images/add'
          element={<OwnerAddVehicleImages />}
        />

        <Route path='/owner/customers/view' element={<OwnerViewCustomers />} />
        <Route path='/owner/customers/add' element={<OwnerAddCustomers />} />

        <Route
          path='/owner/bookings/review'
          element={<OwnerReviewBookings />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
