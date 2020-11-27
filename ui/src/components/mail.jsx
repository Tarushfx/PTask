import React from "react";

const Mail = (props) => {
  return (
    <div className="mail-detail hide">
      <div className="mail-detail-header">
        <div className="mail-detail-profile">
          <img
            src="images/User-Icon.jpg"
            alt=""
            className="members inbox-detail"
          />
          <div className="mail-detail-name">User2</div>
        </div>
        <div className="mail-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2"
          >
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-tag"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-square"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-paperclip"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
        </div>
      </div>
      <div className="mail-contents">
        <div className="mail-contents-subject">
          <input
            type="checkbox"
            name="msg"
            id="mail20"
            className="mail-choice"
            checked
          ></input>
          <label htmlFor="mail20"></label>
          <div className="mail-contents-title">
            Write an article about design
          </div>
        </div>
        <div className="mail">
          <div className="mail-time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            20 August, 2020
          </div>
          <div className="mail-inside">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            accumsan commodo lectus gravida dictum. Aliquam a dui eu arcu
            hendrerit porta sed in velit. Fusce eu semper magna. Aenean porta
            facilisis neque, ac dignissim magna vestibulum eu. Etiam id ligula
            eget neque placerat ultricies in sed neque. Nam vitae rutrum est.
            Etiam non condimentum ante, eu consequat orci. Aliquam a dui eu arcu
            hendrerit porta sed in velit. Fusce eu semper magna.
          </div>
          <div className="mail-assign">
            <div className="assignee">
              <strong>User</strong> assigned to User2.
              <span className="assign-date">25 Nov, 2019</span>
            </div>
            <div className="assignee">
              <strong>User</strong> added to Marketing.
              <span className="assign-date">18 Feb, 2019</span>
            </div>
            <div className="assignee">
              <strong>User </strong> created task.
              <span className="assign-date">17 August, 2020</span>
            </div>
          </div>
          <div className="mail-checklist">
            <input
              type="checkbox"
              name="msg"
              id="mail30"
              className="mail-choice"
              checked
            ></input>
            <label htmlFor="mail30">User2 completed this task.</label>
            <div className="mail-checklist-date">20 August, 2020</div>
          </div>
          <div className="mail-doc">
            <div className="mail-doc-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-file-text"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
              <div className="mail-doc-detail">
                <div className="mail-doc-name">Article.docx</div>
                <div className="mail-doc-date">added 20 August, 2020</div>
              </div>
            </div>
            <div className="mail-doc-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash-2"
              >
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-download-cloud"
              >
                <path d="M8 17l4 4 4-4M12 12v9" />
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mail-textarea">
        <input type="text" placeholder="Write a comment..."></input>
        <div className="textarea-icons">
          <div className="attach">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
            </svg>
          </div>
          <div className="send">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-send"
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
