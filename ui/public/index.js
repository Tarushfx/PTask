$(".mail-choice").click(function () {
  $(this).parent().toggleClass("selected-bg");
});

const colorInput = document.getElementById("colorpicker");

colorInput
  ? colorInput.addEventListener("input", (e) => {
      document.body.style.setProperty("--button-color", e.target.value);
      colorInput.value = e.target.value;
    })
  : null;

$(".inbox-calendar-checkbox").click(function () {
  if ($(".calendar-container").hasClass("calendar-show")) {
    unmountCalendar("#quote-inbox-content");
  } else {
    displayCalendar();
    unmountQuote();
    unmountTaskContent();
  }
});
const displayCalendar = () => {
  $(".calendar-container").addClass("calendar-show");
  $(".inbox-container").addClass("hide");
  $("#quote-inbox-content").addClass("hide");
  $(".mail-contents").addClass("hide");
  $(".message-area").addClass("hide");
};
const unmountCalendar = (show) => {
  $(".calendar-container").removeClass("calendar-show");
  $(".inbox-container").removeClass("hide");
  $(show).removeClass("hide");
};
const displayQuote = () => {
  $("#quote-inbox-content").removeClass("hide");
  // $(".calendar-container").removeClass("calendar-show");
  // $(".inbox-container").addClass("hide");
  $(".mail-contents").addClass("hide");
  $(".message-area").addClass("hide");
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
