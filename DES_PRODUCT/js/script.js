$(document).ready(function () {
  $(".version").click(function (e) {
    e.preventDefault();
    $(this).find('input[type="radio"]').prop("checked", true);
  });

  $(".btn__zoom").click(function (e) {
    e.preventDefault();
    $(".specifications__left__content").toggleClass(
      "specifications__left__content__collage"
    );
    $(".btn").toggleClass("d-none");
  });

  $(".btn__minimize").click(function (e) {
    e.preventDefault();
    $(".specifications__left__content").toggleClass(
      "specifications__left__content__collage"
    );
    $(".btn").toggleClass("d-none");
  });
});
