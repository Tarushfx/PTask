$(".mail-choice").click(function () {
  $(this).parent().toggleClass("selected-bg");
  // if ($(this).is(":checked")) {

  // } else {
  //   $(this).parent().removeClass("selected-bg");
  // }
});

const colorInput = document.getElementById("colorpicker");

colorInput.addEventListener("input", (e) => {
  document.body.style.setProperty("--button-color", e.target.value);
});

$(".inbox-calendar").click(function () {
  $(".calendar-container").toggleClass("calendar-show");
  $(".inbox-container").toggleClass("hide");
  $(".mail-detail").toggleClass("hide");
});
