$(document).ready(function () {
  $("#filter-button").on("click", function () {
    $("#filter").removeClass("d-none");
  });
  $("#close-filter").click(function (e) {
    e.preventDefault();
    $("#filter").addClass("d-none");
  });
});
