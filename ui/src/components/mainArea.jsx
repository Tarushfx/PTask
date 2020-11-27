import React from "react";
import MainContainer from "./mainContainer.jsx";
import NavBar from "./navBar.jsx";
const MainArea = (props) => {
  return (
    <div className="main-area">
      <NavBar user={props.user} />
      <MainContainer user={props.user} loadData={props.loadData}/>
    </div>
  );
};

export default MainArea;
