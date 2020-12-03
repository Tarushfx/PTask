import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authservice from "../../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../../graphQLFetch.js";
import "../../css/toast.css";

/*
 * notif = {
 *   text: ,
 *   type: ,
 *   status: ,
 * }
 */

async function pushNotifications(notif) {
  const query = `mutation notifAdd($notif: NotifAdd!) {
    NotifAdd(notif: $notif)
  }`;

  const id = jwt.decode(authservice.getToken())._id;

  const addedNotif = {
    _id: id,
    text: notif.text,
    type: notif.type,
    status: notif.status,
  };

  const data = await graphQLFetch(query, { notif: addedNotif });
  if (data.NotifAdd == "Added Notification") {
    return true;
  } else if (data.error) {
    return false;
  }
}

/*
 * notif = {
 *   id: , (this id is notification id)
 *   status: ,
 * }
 */

async function updateNotificationStatus(notif) {
  const query = `mutation notifUpdate($notif: NotifUpdate!){
    NotifUpdate(notif: $notif)
  }`;

  const id = jwt.decode(authservice.getToken())._id;

  const updatedNotif = {
    _id: id,
    notif_id: notif.id,
    status: notif.status,
  };

  await graphQLFetch(query, { notif: updatedNotif });
}

/*
 * notif = {
 *   id: , (this id is notification id)
 * }
 */

async function removeNotification(notif) {
  const query = `mutation notifRemove($notif: NotifRemove!){
    NotifRemove(notif: $notif)
  }`;

  const id = jwt.decode(authservice.getToken())._id;

  const removedNotif = {
    _id: id,
    notif_id: notif._id,
  };

  await graphQLFetch(query, { notif: removedNotif });
}
let tempLength = "";
const Notifications = (notifArray) => {
  tempLength = notifArray.length;
  if (notifArray.length !== 0) {
    notifArray.forEach(function (notif) {
      displayAToast(notif);
    });
  }
};
const updateNotifNumber = (no) => {
  if (no)
    document.documentElement.style.setProperty(
      "--notif-bell-content",
      `"${no}"`
    );
  else if (!no) {
    (() => {
      document.getElementById("notifButton") &&
        $("#notifButton").removeClass("alert");
    })();
    console.log("1234");
  }
};
const settings = {
  position: "top-right",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onOpen: () => console.log("logged"),
  onClose: async ({ id }) => {
    console.log(id);
    await updateNotificationStatus({
      id: id,
      status: false,
    });
    tempLength--;
    updateNotifNumber(tempLength);
  },
};
// design for the notification
const NotifyComponent = (props) => {
  return <div className="12">{props.text}</div>;
};

const displayAToast = ({ text, type, status, _id: id }) => {
  switch (type) {
    case 1:
      return toast(<NotifyComponent text={` 🦄 ${text}`} id={id} />, settings);
    case 2:
      return toast.info(
        <NotifyComponent text={`🦄 ${text}`} id={id} />,
        settings
      );
    case 3:
      return toast.success(
        <NotifyComponent text={`🦄 ${text}`} id={id} />,
        settings
      );
    case 4:
      return toast.error(
        <NotifyComponent text={`🦄  ${text}`} id={id} />,
        settings
      );
    default:
      return toast.warn(
        <NotifyComponent text={`🦄  ${text}`} id={id} />,
        settings
      );
  }
};

const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}>
    <button type="button" className="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </i>
);
const Container = (
  <ToastContainer
    closeButton={CloseButton}
    pauseOnFocusLoss={true}
    role="alert"
  />
);
const displayWithoutCallback = ({ text }) => {
  toast.success(`🦄 ${text}`, {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default {
  Notifications,
  displayAToast,
  Container,
  pushNotifications,
  updateNotificationStatus,
  removeNotification,
  displayWithoutCallback,
};
