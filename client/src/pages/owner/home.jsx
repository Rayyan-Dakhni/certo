import React, { useState } from "react";
import ErrorAlert from "../../components/alerts/error";
import InfoAlert from "../../components/alerts/info";
import SuccessAlert from "../../components/alerts/success";
import OwnerNavbar from "../../components/navigation/owner/navbar";
import OwnerSidebar from "../../components/navigation/owner/sidebar";

const OwnerDashboard = () => {
  const [alertMessage, setAlertMessage] = useState();

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
      <div>Dashboard</div>
    </div>
  );
};

export default OwnerDashboard;
