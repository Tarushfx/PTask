const displayCalender = () => {
  $(".calendar-container").addClass("calendar-show");
  $(".inbox-container").addClass("hide");
  $("#quote-inbox-content").addClass("hide");
  $(".mail-contents").addClass("hide");
};
const unmountCalender = (show) => {
  $(".calendar-container").removeClass("calendar-show");
  $(".inbox-container").removeClass("hide");
  $(show).removeClass("hide");
};
const displayQuote = () => {
  $("#quote-inbox-content").removeClass("hide");
  // $(".calendar-container").removeClass("calendar-show");
  // $(".inbox-container").addClass("hide");
  $(".mail-contents").addClass("hide");
};
const unmountQuote = () => {
  // $(".calendar-container").addClass("calendar-show");
  $("#quote-inbox-content").addClass("hide");
  // $(show).removeClass("hide");
};
const displayTaskContent = () => {
  $(".mail-contents").removeClass("hide");
  $().addClass("hide");
  // $(".calendar-container").removeClass("calendar-show");
  // $(".inbox-container").addClass("hide");
};
const unmountTaskContent = () => {
  // $(".calendar-container").addClass("calendar-show");
  $(".mail-contents").addClass("hide");
  // $(show).removeClass("hide");
};
const displayMessageContainer = () => {};
const unmountMessageContainer = () => {};

export default {
  displayCalender,
  displayMessageContainer,
  displayQuote,
  displayTaskContent,
  unmountCalender,
  unmountMessageContainer,
  unmountQuote,
  unmountTaskContent,
};
