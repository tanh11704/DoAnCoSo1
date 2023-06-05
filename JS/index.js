$(document).ready(function () {
  $("li.pagination-index button").click(function (e) {
    e.preventDefault();
    let listPaginationIndex = $(this)
      .closest(".pagination")
      .find(".pagination-index");
    $(listPaginationIndex).removeClass("active");
    $(this).closest(".pagination-index").addClass("active");
  });

  $(".pagination-pre").click(function (e) {
    e.preventDefault();
    let listPaginationIndex = $(this)
      .closest(".pagination")
      .find(".pagination-index");

    if (
      $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .prev(".pagination-index").length === 0
    ) {
    } else {
      let preElement = $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .prev(".pagination-index")
        .addClass("active");
      $(listPaginationIndex).removeClass("active");
      preElement.addClass("active");
    }
  });

  $(".pagination-next").click(function (e) {
    e.preventDefault();
    let listPaginationIndex = $(this)
      .closest(".pagination")
      .find(".pagination-index");

    if (
      $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .next(".pagination-index").length === 0
    ) {
    } else {
      let preElement = $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .next(".pagination-index")
        .addClass("active");
      $(listPaginationIndex).removeClass("active");
      preElement.addClass("active");
    }
  });
});
