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

  await graphQLFetch(query, { notif: addedNotif });
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

const settings = {
  position: "top-right",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: ({ text, id }) => console.log(text, id),
};
// design for the notification
const NotifyComponent = (props) => {
  return <div className="12">{props.text}</div>;
};

const displayAToast = ({ text, type }) => {
  switch (type) {
    case 1:
      return toast("🦄 Wow so easy!  " + text, settings);
    case 2:
      return toast("🦄 Wow so easy!  " + text, settings);
    case 3:
      return toast.success("🦄 Wow so easy!  " + text, settings);
    case 4:
      return toast.info("🦄 Wow so easy!  " + text, settings);
    default:
      return toast(
        <NotifyComponent text={`"🦄 Wow so easy!  " + ${text}`} />,
        settings
      );
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
const Container = (
  <ToastContainer
    closeButton={CloseButton}
    pauseOnFocusLoss={true}
    role="alert"
  />
);
export default {
  Notifications,
  displayAToast,
  Container,
  pushNotifications,
  updateNotificationStatus,
  removeNotification,
};
