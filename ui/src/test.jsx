import React from "react";
import { toast } from "react-toastify";

function Msg({ uid }) {
  return <span>{uid}</span>;
}

function Example() {
  const notify = () => {
    toast(<Msg uid={"this is a uid for real"} />, {
      onOpen: ({ uid }) => window.alert(uid),
      onClose: ({ uid }) => console.log(uid),
    });
  };

  return <button onClick={notify}>Notify</button>;
}
export default Example;
