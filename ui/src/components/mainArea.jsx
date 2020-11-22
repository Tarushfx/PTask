import React from "react";
import MainContainer from "./mainContainer.jsx";
import NavBar from "./navBar.jsx";
const MainArea = (props) => {
  return (
    <div className="main-area">
      <NavBar />
      <MainContainer />
    </div>
  );
};

export default MainArea;
