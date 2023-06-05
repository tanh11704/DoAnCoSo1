let imageMain = $("#imageMain img");
let imagesUrl = $("#listImages img");
imagesUrl = $.map(imagesUrl, function (element) {
  return $(element).attr("src");
});

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

  $("#send-comment").click(function (e) {
    e.preventDefault();
    let fullname = $(this).closest("form").find('input[name="fullname"]').val();
    let phone = $(this).closest("form").find('input[name="phone"]').val();
    let mail = $(this).closest("form").find('input[name="mail"]').val();
    let comment = $(this)
      .closest("form")
      .find('textarea[name="comment"]')
      .val();
    let currentdate = new Date();
    const datetime = `${currentdate.toLocaleString("vi")}`;

    let comment_component = $(".comment-component");
    let html = `<div class="comment-component mt-3">
                    <div class="comment-parent d-flex mb-3">
                        <div class="comment__avatar bg-light rounded-circle" style="height: fit-content;">
                            <i class="fa fa-user fs-2 p-4"></i>
                        </div>
                        <div class="ms-3 comment__content">
                            <div class="user__comment">
                                <div class="comment__name">
                                    <b class="text-black">${fullname}</b>
                                </div>
                                <div class="comment__time">
                                    ${datetime}
                                </div>
                                <div class="text-black">
                                    ${comment}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    comment_component.prepend(html);
  });

  let currentImage = 0;
  setImage(imageMain, currentImage);

  $("#product-image-pre").click(function (e) {
    e.preventDefault();
    if (currentImage === 0) {
      currentImage = imagesUrl.length - 1;
      setImage(imageMain, currentImage);
    } else {
      currentImage--;
      setImage(imageMain, currentImage);
    }
  });

  $("#product-image-next").click(function (e) {
    e.preventDefault();
    if (currentImage === imagesUrl.length - 1) {
      currentImage = 0;
      setImage(imageMain, currentImage);
    } else {
      currentImage++;
      setImage(imageMain, currentImage);
    }
  });

  $("#addCart").click(function (e) {
    e.preventDefault();

    let productElement = $(this).closest(".choose__product");
    let name = $(".product__title h4").text();
    let color = $(productElement)
      .find("input[type='radio'][name='phone-color']:checked")
      .val();

    let capacity = $(productElement)
      .find("input[type='radio'][name='phone-version']:checked")
      .val();
    let price = parseFloat(
      $(productElement)
        .find("input[type='radio'][name='phone-version']:checked")
        .closest(".version")
        .find(".price__color")
        .text()
        .replaceAll(",", "")
    );

    if (capacity === undefined || capacity === "") {
      alert("Vui lòng chọn phiên bản mong muốn của bạn!");
    } else if (color === undefined || color === "") {
      alert("Vui lòng chọn màu sắc mong muốn của bạn!");
    } else {
      let imgUrl = "." + "./img/ip14-prm-" + color.toLowerCase() + ".webp";

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      let product = {
        name,
        imgUrl,
        capacity,
        color,
        price,
      };

      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("Thêm vào giỏ hàng thành công!");
    }
  });

  $("input[type='radio'][name='phone-color']").change(function (e) {
    e.preventDefault();
    console.log($("input[type='radio'][name='phone-color']"));
  });
});

function setImage(imgComponent, index) {
  imgComponent.fadeOut(400, () => {
    imgComponent.attr("src", imagesUrl[index]).fadeIn(400);
  });
}
