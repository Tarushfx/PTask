import React from "react";
import MainContainer from "./mainContainer.jsx";
import NavBar from "./navBar.jsx";
import quotes from "../../public/quote.js";

class MainArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskFilter: false,
    };
    this.likesArray = props.user.likes
      ? props.user.likes
      : ["motivation", "life", "positivity", "optimism", "inspiration"];

    this.quotetmp = quotes.filter((quote) => {
      let common = this.likesArray.filter((value) =>
        quote.tags.includes(value)
      );
      return common.length !== 0;
    });
    this.quote = this.quotetmp[
      Math.floor(Math.random() * this.quotetmp.length)
    ];
    this.navbarTaskChange = this.navbarTaskChange.bind(this);
  }

  navbarTaskChange({ currentTarget: button }) {
    console.log(button.checked);
    this.setState({ taskFilter: button.checked });
  }
  render() {
    return (
      <div className="main-area">
        <NavBar
          user={this.props.user}
          navbarTaskChange={this.navbarTaskChange}
        />
        <MainContainer
          user={this.props.user}
          loadData={this.props.loadData}
          quote={this.quote}
          taskFilter={this.state.taskFilter}
        />
      </div>
    );
  }
}

export default MainArea;
