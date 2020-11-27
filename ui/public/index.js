$(".mail-choice").click(function () {
  $(this).parent().toggleClass("selected-bg");
});

const colorInput = document.getElementById("colorpicker");

colorInput.addEventListener("input", (e) => {
  document.body.style.setProperty("--button-color", e.target.value);
  colorInput.value = e.target.value;
});

$(".inbox-calendar").click(function () {
  $(".calendar-container").toggleClass("calendar-show");
  $(".inbox-container").toggleClass("hide");
  if ($(".calendar-container").hasClass("calendar-show")) {
    $("#quote-inbox-content").addClass("hide");
    $(".mail-contents").addClass("hide");
  } else {
    $("#quote-inbox-content").removeClass("hide");
  }
});
