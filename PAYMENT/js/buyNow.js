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

  $(".content__body__form").submit(function (e) {
    e.preventDefault();
    let totalPrice = parseFloat($(this).find(".pricesTotal").text());
    let fullName = $(this).find('input[name="txtName"]').val();
    let phoneNumber = $(this).find('input[name="txtPhone"]').val();
    let email = $(this).find('input[name="txtMail"]').val();
    let province = $(this).find('select[name="province"]').val();
    let district = $(this).find('select[name="district"]').val();
    let paymentMethod = $(this).find("#payment-selected").val();

    console.log(typeof province, province === "0");

    if (totalPrice === 0) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn sản phẩm để thanh toán.",
        icon: "error",
        button: "OK",
      });
    } else if (fullName.length === 0) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng nhập họ tên của bạn.",
        icon: "error",
        button: "OK",
      });
    } else if (checkPhoneNumber(phoneNumber) === false) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng nhập đúng định dạng số điện thoại.",
        icon: "error",
        button: "OK",
      });
    } else if (checkMail(email) === false) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng nhập đúng định dạng email.",
        icon: "error",
        button: "OK",
      });
    } else if (province === "0") {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn Tỉnh thành của bạn.",
        icon: "error",
        button: "OK",
      });
    } else if (district === "0") {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn Huyện của bạn.",
        icon: "error",
        button: "OK",
      });
    } else if (paymentMethod === "0") {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn hình thức thanh toán.",
        icon: "error",
        button: "OK",
      });
    } else {
      swal({
        title: "Vui lòng xác nhận!",
        text: "Bạn có chắc chắn muốn thanh toán sản phẩm này?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Thanh toán thành công!", {
            icon: "success",
          });
        } else {
          swal("Sản phẩm chưa được thanh toán!", {
            icon: "error",
          });
          loadProducts();
        }
      });
    }
  });

  $("#payment-selected").change(function () {
    $("#bank-transfer").addClass("d-none");
    $("#momo-transfer").addClass("d-none");
    var data = $(this).val();
    if (data === "2") {
      $("#bank-transfer").removeClass("d-none");
    }
    if (data === "3") {
      $("#momo-transfer").removeClass("d-none");
    }
  });

  $(".content__body__form input[name='txtName']").change(function (e) {
    let val = $(this).val();
    if (val === "") {
      $(this).css("border-color", "red");
      $(this).closest("div").find("small").eq(0).removeClass("d-none");
      $(this).closest("div").find("small").eq(1).addClass("d-none");
    } else {
      $(this).css("border-color", "green");
      $(this).closest("div").find("small").eq(0).addClass("d-none");
      $(this).closest("div").find("small").eq(1).removeClass("d-none");
    }
  });

  $(".content__body__form input[name='txtPhone']").change(function (e) {
    let val = $(this).val();
    if (checkPhoneNumber(val) === false) {
      $(this).css("border-color", "red");
      $(this).closest("div").find("small").eq(0).removeClass("d-none");
      $(this).closest("div").find("small").eq(1).addClass("d-none");
    } else {
      $(this).css("border-color", "green");
      $(this).closest("div").find("small").eq(0).addClass("d-none");
      $(this).closest("div").find("small").eq(1).removeClass("d-none");
    }
  });

  $(".content__body__form input[name='txtMail']").change(function (e) {
    let val = $(this).val();
    if (checkMail(val) === false) {
      $(this).css("border-color", "red");
      $(this).closest("div").find("small").eq(0).removeClass("d-none");
      $(this).closest("div").find("small").eq(1).addClass("d-none");
    } else {
      $(this).css("border-color", "green");
      $(this).closest("div").find("small").eq(0).addClass("d-none");
      $(this).closest("div").find("small").eq(1).removeClass("d-none");
    }
  });

  $(".content__body__form select").change(function (e) {
    if ($(this).val() > 0) {
      $(this).css("border-color", "green");
    } else {
      $(this).css("border-color", "red");
    }
  });

  $(".content__body__form select[name='province']").change(function (e) {
    e.preventDefault();
    let provinceId = $(this).val();
    let district = $(".content__body__form select[name='district']");
    district.find("option").not(":first").remove();
    if (provinceId === "1") {
      district.append('<option value="1">Hoàn Kiếm</option>');
      district.append('<option value="2">Ba Đình</option>');
      district.append('<option value="3">Đống Đa</option>');
      district.append('<option value="4">Hai Bà Trưng</option>');
    } else if (provinceId === "2") {
      district.append('<option value="1">Hải Châu</option>');
      district.append('<option value="2">Sơn Trà</option>');
      district.append('<option value="3">Ngũ Hành Sơn</option>');
      district.append('<option value="3">Hòa Khánh</option>');
    } else if (provinceId === "3") {
      district.append('<option value="1">Quận Bình Tân</option>');
      district.append('<option value="2">Quận Bình Thạnh</option>');
      district.append('<option value="3">Quận Gò Vấp</option>');
      district.append('<option value="4">Quận Phú Nhuận</option>');
    }
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

  $(".content__body__form").submit(function (e) {
    e.preventDefault();
    let totalPrice = parseFloat($(this).find(".pricesTotal").text());
    let fullName = $(this).find('input[name="txtName"]').val();
    let phoneNumber = $(this).find('input[name="txtPhone"]').val();
    let email = $(this).find('input[name="txtMail"]').val();
    let province = $(this).find('select[name="province"]').val();
    let district = $(this).find('select[name="district"]').val();
    let paymentMethod = $(this).find("#payment-selected").val();
    if (totalPrice === 0) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn sản phẩm để thanh toán.",
        icon: "error",
        button: "OK",
      });
    } else if (fullName.length === 0) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng nhập họ tên của bạn.",
        icon: "error",
        button: "OK",
      });
    } else if (checkPhoneNumber(phoneNumber) === false) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng nhập đúng định dạng số điện thoại.",
        icon: "error",
        button: "OK",
      });
    } else if (checkMail(email) === false) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng nhập đúng định dạng email.",
        icon: "error",
        button: "OK",
      });
    } else if (province === 0) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn Tỉnh thành của bạn.",
        icon: "error",
        button: "OK",
      });
    } else if (district === 0) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn Huyện của bạn.",
        icon: "error",
        button: "OK",
      });
    } else if (paymentMethod === 0) {
      swal({
        title: "Lỗi!",
        text: "Vui lòng chọn hình thức thanh toán.",
        icon: "error",
        button: "OK",
      });
    } else {
      swal({
        title: "Vui lòng xác nhận!",
        text: "Bạn có chắc chắn muốn thanh toán sản phẩm này?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
          let checkedElement = $(
            ".content__body__products input[type='checkbox']:checked"
          );
          let listProductsCheckedElements = $(checkedElement).closest(".card");
          $(listProductsCheckedElements).each(function () {
            let nameProductChecked = $(this).find("h5").text();
            let capacityProductChecked = $(this).find(".capacity").text();
            let colorProductChecked = $(this).find(".color").text();
            let imgProductChecked = $(this).find("img").attr("src");
            cartItems = cartItems.filter(
              (item) =>
                item.name !== nameProductChecked ||
                item.capacity !== capacityProductChecked ||
                item.color !== colorProductChecked ||
                item.imgUrl !== imgProductChecked
            );
          });
          swal("Thanh toán thành công!", {
            icon: "success",
          });
        } else {
          swal("Sản phẩm chưa được thanh toán!", {
            icon: "error",
          });
        }
      });
    }
  });

  $("#product__storage").click(function (e) {
    e.preventDefault();
    loadPrice();
  });
});

function setImage(imgComponent, index) {
  imgComponent.fadeOut(400, () => {
    imgComponent.attr("src", imagesUrl[index]).fadeIn(400);
  });
}

function loadPrice() {
  let productPrice = $("#product__storage input[type='radio']:checked")
    .closest("div")
    .siblings("strong")
    .text();
  let productColorPrice = $("#product__color .price__color");
  let priceTotal = $(".pricesTotal");

  $(productColorPrice).text(productPrice);

  $(priceTotal).text(productPrice);
}

function checkPhoneNumber(phoneNumber) {
  var phonePattern = /^(\+84|0)\d{9}$/;

  if (phonePattern.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
}

function checkMail(mail) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(mail)) {
    return true;
  } else {
    return false;
  }
}
