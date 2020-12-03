import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import jwt from "jsonwebtoken";
import ModalInput from "../components/modalInput.jsx";
import authservice from "../../services/authservice.js";
import Toast from "../components/Notification/Notifications.jsx";

const PushNotification = (props) => {
  async function handleSubmitAddReminder(e) {
    e.preventDefault();
    const form = document.forms.addReminder;

    const id = jwt.decode(authservice.getToken())._id;

    const notif = {
      _id: id,
      text: form.reminder.value,
      type: 4,
      status: true,
    };

    form.reminder.value = "";

    const data = await Toast.pushNotifications(notif);

    await (() => $("#pushNotifModal").modal("hide"))();

    if(data) {
      document.getElementById("successContent").innerHTML = "Reminder Added!!";
      document.getElementById("successButton").click();
    }
    else {
      document.getElementById("errorContent").innerHTML = "Something went wrong! Try again";
      document.getElementById("errorButton").click();
    }
    await props.loadData();
  }

  return (
    <div id="pushNotifModal" className="modal fade" role="dialog">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="content"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Add Reminder</h3>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div className="modal-body">
            <form name="addReminder" onSubmit={handleSubmitAddReminder}>
              <ModalInput
                mode="textarea"
                placeholder="Reminder"
                type="text"
                id="reminder"
                name="reminder"
                key="desc"
                iconType="password"
              />

              <div className="form-group row mt-3">
                <button
                  type="button"
                  className="add-button ml-2"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="add-button ml-2"
                  id="addReminderSubmit"
                >
                  Add a Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
