import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const settings = {
  position: "top-right",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
const displayAToast = ({ text, type }) => {
  switch (type) {
    case 1:
      return toast.dark("🦄 Wow so easy!  " + text, settings);
    case 2:
      return toast("🦄 Wow so easy!  " + text, settings);
    case 3:
      return toast.success("🦄 Wow so easy!  " + text, settings);
    case 4:
      return toast.info("🦄 Wow so easy!  " + text, settings);
    default:
      return toast("🦄 Wow so easy!  " + text, settings);
  }
};
const Notifications = (notifArray) => {
  if (notifArray.length !== 0) {
    notifArray.forEach(function (obj, index) {
      displayAToast(obj);
    });
  }
};
const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}>
    <button type="button" className="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </i>
);
const Container = <ToastContainer closeButton={CloseButton} />;
export default {
  Notifications,
  displayAToast,
  Container,
};
