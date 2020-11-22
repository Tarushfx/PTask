import React from "react";
import MsgItem from "./msgItem.jsx";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Inbox = (props) => {
  const array = [1, 2, 3, 4];
  return (
    <div className="inbox-container">
      <div className="inbox">
        {array.map((msgItem, index) => (
          <MsgItem
            classes="msg selected-bg anim-y"
            key={index}
            index={index}
            tiitle="Hello"
            // date={new Date("2020-15-08")}
          />
        ))}
        <div className="msg msg-department anim-y">
          Marketing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 492 492"
          >
            <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
          </svg>
        </div>
        <div className="msg selected-bg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail1"
            className="mail-choice"
            checked
          ></input>
          <label htmlFor="mail1"></label>
          <div className="msg-content">
            <div className="msg-title">Write an article about design</div>
            <div className="msg-date">20 August, 2020</div>
          </div>
          <img src="./assets/om.jpeg" alt="" className="members mail-members" />
        </div>
        <div className="msg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail2"
            className="mail-choice"
          ></input>
          <label htmlFor="mail2"></label>
          <div className="msg-content">
            <div className="msg-title">Lorem ipsum</div>
            <div className="msg-date">Date</div>
          </div>
          <img
            src="./assets/atishek.jpeg"
            alt=""
            className="members mail-members"
          />
        </div>
        <div className="msg selected-bg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail3"
            className="mail-choice"
            checked
          ></input>
          <label htmlFor="mail3"></label>
          <div className="msg-content">
            <div className="msg-title">Lorem ipsum dolor sit amet</div>
            <div className="msg-date">Date</div>
          </div>
          <img
            src="./assets/neha.jpeg"
            alt=""
            className="members mail-members"
          />
        </div>
        <div className="msg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail4"
            className="mail-choice"
          />
          <label htmlFor="mail4"></label>
          <div className="msg-content">
            <div className="msg-title">Lorem ipsum dolor</div>
            <div className="msg-date">Date</div>
          </div>
          <img
            src="./assets/yash.jpeg"
            alt=""
            className="members mail-members"
          />
        </div>
        <div className="msg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail5"
            className="mail-choice"
          ></input>
          <label htmlFor="mail5"></label>
          <div className="msg-content">
            <div className="msg-title">Lorem ipsum</div>
            <div className="msg-date">Date</div>
          </div>
          <img
            src="./assets/tarush.jpeg"
            alt=""
            className="members mail-members"
          />
        </div>
        <div className="msg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail6"
            className="mail-choice"
          ></input>
          <label htmlFor="mail6"></label>
          <div className="msg-content">
            <div className="msg-title">Lorem ipsum dolor amet</div>
            <div className="msg-date">Date</div>
          </div>
          <img
            src="./assets/atishek.jpeg"
            alt=""
            className="members mail-members"
          />
        </div>
        <div className="msg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail7"
            className="mail-choice"
          />
          <label htmlFor="mail7"></label>
          <div className="msg-content">
            <div className="msg-title">Lorem</div>
            <div className="msg-date">Date</div>
          </div>
          <img src="./assets/om.jpeg" alt="" className="members mail-members" />
        </div>
        <div className="msg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail8"
            className="mail-choice"
          ></input>
          <label htmlFor="mail8"></label>
          <div className="msg-content">
            <div className="msg-title">Lorem ipsum</div>
            <div className="msg-date">Date</div>
          </div>
          <img
            src="./assets/tarush.jpeg"
            alt=""
            className="members mail-members"
          />
        </div>
      </div>
      <div className="add-task">
        <button className="add-button" data-toggle="modal" data-target="#taskModal">Add task</button>
      </div>
    </div>
  );
};

export default Inbox;
