import React from 'react';
import { ToastContainer, toast } from "react-toastify";

function SimpleNotif(){

  const displayMsg = () => {
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // toast(Msg) would also work
  }

  return (
    <React.Fragment>
      <button onClick={displayMsg}>Click me</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover> </ToastContainer>.
    </React.Fragment>
  );
}

export default SimpleNotif;
