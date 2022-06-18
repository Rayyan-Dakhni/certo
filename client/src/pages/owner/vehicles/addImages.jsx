import React, { useEffect, useState } from "react";

import { HiCamera } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessAlert from "../../../components/alerts/success";
import ErrorAlert from "../../../components/alerts/error";
import InfoAlert from "../../../components/alerts/info";
import {
  AddLoaderToBtn,
  AddTextToBtn,
  HideAlert,
  ShowAlert,
} from "../../../helper/functions";
import apiUrl from "../../../config";
import OwnerNavbar from "../../../components/navigation/owner/navbar";
import OwnerSidebar from "../../../components/navigation/owner/sidebar";

const OwnerAddVehicleImages = (props) => {
  const authToken = sessionStorage.getItem("token");

  const location = useLocation();

  const vehicleId = location.state.vehicleId;

  const [alertMessage, setAlertMessage] = useState();

  const [frontImage, setFrontImage] = useState();
  const [backImage, setBackImage] = useState();
  const [leftImage, setLeftImage] = useState();
  const [rightImage, setRightImage] = useState();
  const [frontSeatsImage, setFrontSeatsImage] = useState();
  const [rearSeatsImage, setRearSeatsImage] = useState();
  const [dashboardImage, setDashboardImage] = useState();
  const [consoleImage, setConsoleImage] = useState();

  const [frontImageUrl, setFrontImageUrl] = useState();
  const [backImageUrl, setBackImageUrl] = useState();
  const [leftImageUrl, setLeftImageUrl] = useState();
  const [rightImageUrl, setRightImageUrl] = useState();
  const [frontSeatsImageUrl, setFrontSeatsImageUrl] = useState();
  const [rearSeatsImageUrl, setRearSeatsImageUrl] = useState();
  const [dashboardImageUrl, setDashboardImageUrl] = useState();
  const [consoleImageUrl, setConsoleImageUrl] = useState();

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

    if (frontImage) {
      console.log("aya");

      const newVehicle = {};

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

            setTimeout(() => {
              // navigate to view all vehicles
              navigate("../owner/vehicles/view", { replace: true });
            }, 3000);
          }
        });
    }
  }

  const HandleOnChange = (e, setUrl, setImage) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);

    setUrl(imgUrl);
    setImage(file);
  };

  const OnSubmitFrontImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("frontImage", frontImage);

    fetch(`${apiUrl}/vehicles/images/front`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

  const OnSubmitBackImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("backImage", backImage);

    fetch(`${apiUrl}/vehicles/images/back`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

  const OnSubmitRightImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("rightImage", rightImage);

    fetch(`${apiUrl}/vehicles/images/right`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

  const OnSubmitLeftImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("leftImage", leftImage);

    fetch(`${apiUrl}/vehicles/images/left`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

  const OnSubmitFrontSeatsImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("frontSeatsImage", frontSeatsImage);

    fetch(`${apiUrl}/vehicles/images/seats/front`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

  const OnSubmitRearSeatsImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("rearSeatsImage", rearSeatsImage);

    fetch(`${apiUrl}/vehicles/images/seats/rear`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

  const OnSubmitDashboardImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("dashboardImage", dashboardImage);

    fetch(`${apiUrl}/vehicles/images/dashboard`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

  const OnSubmitConsoleImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vehicle_id", vehicleId);
    formData.append("consoleImage", consoleImage);

    fetch(`${apiUrl}/vehicles/images/console`, {
      method: "post",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAlertMessage(data.message);

        ShowAlert("success");

        setTimeout(() => {
          // hide alert
          HideAlert("success");

          // navigate to view all vehicles page
          navigate("/owner/vehicles/view", { replace: true });
        }, 4000);
      })
      .catch((err) => {
        console.log(err);

        setAlertMessage(err);

        ShowAlert("error");

        setTimeout(() => {
          HideAlert("error");
        }, 2000);
      });
  };

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
          Add Vehicle Images
        </h1>
        <div className='px-5 w-full'>
          <div className='bg-white w-full p-3 rounded-md'>
            {/* Front Image */}
            <div className='mt-2'>
              <form onSubmit={OnSubmitFrontImage} encType='multipart/form-data'>
                <label htmlFor='front image'>Vehicle Front Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(e, setFrontImageUrl, setFrontImage);
                  }}
                  name='front_image'
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!frontImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={frontImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle front image'
                    />
                  )}
                </div>

                <button
                  id='addFrontImageBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>

            <br />

            {/* Back Image */}
            <div className='mt-2'>
              <form onSubmit={OnSubmitBackImage} encType='multipart/form-data'>
                <label htmlFor='Year'>Vehicle Back Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(e, setBackImageUrl, setBackImage);
                  }}
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!backImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={backImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle back image'
                    />
                  )}
                </div>

                <button
                  id='addBackImageBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>

            <br />

            {/* Left Image */}
            <div className='mt-2'>
              <form onSubmit={OnSubmitLeftImage} encType='multipart/form-data'>
                <label htmlFor='Year'>Vehicle Left Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(e, setLeftImageUrl, setLeftImage);
                  }}
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!leftImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={leftImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle front image'
                    />
                  )}
                </div>

                <button
                  id='addLeftImageBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>

            <br />

            {/* Right Image */}
            <div className='mt-2'>
              <form onSubmit={OnSubmitRightImage} encType='multipart/form-data'>
                <label htmlFor='Year'>Vehicle Right Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(e, setRightImageUrl, setRightImage);
                  }}
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!rightImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={rightImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle front image'
                    />
                  )}
                </div>

                <button
                  id='addRightImageBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>

            <br />

            {/* Front Seats Image */}
            <div className='mt-2'>
              <form
                onSubmit={OnSubmitFrontSeatsImage}
                encType='multipart/form-data'
              >
                <label htmlFor='Year'>Vehicle Front Seats Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(
                      e,
                      setFrontSeatsImageUrl,
                      setFrontSeatsImage
                    );
                  }}
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!frontSeatsImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={frontSeatsImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle front image'
                    />
                  )}
                </div>

                <button
                  id='addFrontSeatsBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>

            <br />

            {/* Rear Seats Image */}
            <div className='mt-2'>
              <form
                onSubmit={OnSubmitRearSeatsImage}
                encType='multipart/form-data'
              >
                <label htmlFor='Year'>Vehicle Rear Seats Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(e, setRearSeatsImageUrl, setRearSeatsImage);
                  }}
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!rearSeatsImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={rearSeatsImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle front image'
                    />
                  )}
                </div>

                <button
                  id='addRearSeatsBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>

            <br />

            {/* Dashboard Image */}
            <div className='mt-2'>
              <form
                onSubmit={OnSubmitDashboardImage}
                encType='multipart/form-data'
              >
                <label htmlFor='Year'>Vehicle Dashboard Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(e, setDashboardImageUrl, setDashboardImage);
                  }}
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!dashboardImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={dashboardImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle front image'
                    />
                  )}
                </div>

                <button
                  id='addDashboardBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>

            <br />

            {/* Console Image */}
            <div className='mt-2'>
              <form
                onSubmit={OnSubmitConsoleImage}
                encType='multipart/form-data'
              >
                <label htmlFor='Year'>Vehicle Console Image</label>
                <br />

                <input
                  type='file'
                  className='appearance-none border w-full p-2 px-5 rounded-md mt-1 focus:outline-none focus:border-gray-900 font-light'
                  onChange={(e) => {
                    HandleOnChange(e, setConsoleImageUrl, setConsoleImage);
                  }}
                />
                <br />
                <br />

                <div className='w-full h-auto rounded-md border'>
                  {!consoleImage ? (
                    <div className='p-5'>
                      <HiCamera className='mx-auto text-4xl' />
                      <br />
                      <h3 className='text-center'>No image selected</h3>
                    </div>
                  ) : (
                    <img
                      src={consoleImageUrl}
                      className='w-full h-full rounded-md'
                      alt='Vehicle front image'
                    />
                  )}
                </div>

                <button
                  id='addConsoleBtn'
                  type='submit'
                  className='mt-4 col-span-2 bg-black text-white p-3 text-center w-full rounded-md transition-all active:scale-95'
                >
                  Add Image
                </button>
              </form>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default OwnerAddVehicleImages;
