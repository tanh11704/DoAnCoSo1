$(document).ready(function () {
  loadProducts();
  loadPrice();

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
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          loadProducts();
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

  $(".add").click(function () {
    var countElement = $(this).siblings(".count");
    var count = parseInt(countElement.text());
    countElement.text(count + 1);
    loadPrice();
  });

  $(".minus").click(function () {
    var countElement = $(this).siblings(".count");
    var count = parseInt(countElement.text());
    if (count > 1) {
      countElement.text(count - 1);
      loadPrice();
    } else {
      if (confirm("Bạn có muốn xóa sản phẩm này?") == true) {
        let productElement = $(this).closest(".card");
        let name = $(productElement).find("h5").text();
        let color = $(productElement).find(".color").text();
        let price = parseFloat(
          $(productElement).find(".price").text().trim().replaceAll(",", "")
        );

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        for (let i = 0; i < cartItems.length; i++) {
          if (
            cartItems[i].name === name &&
            cartItems[i].color === color &&
            cartItems[i].price === price
          ) {
            cartItems.splice(i, 1);
          }
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        loadProducts();
        alert("Đã xóa sản phẩm thành công!");
      }
    }
  });

  $(".content__body__products input[type='checkbox']").click(function (e) {
    let pricesTotal = 0;
    let checkedElement = $(
      ".content__body__products input[type='checkbox']:checked"
    );
    let listProductsCheckedElement = $(checkedElement).closest(".card-body");
    for (let i = 0; i < listProductsCheckedElement.length; i++) {
      pricesTotal += parseFloat(
        $(listProductsCheckedElement[i])
          .find(".priceTotal")
          .text()
          .replaceAll(",", "")
      );
    }
    $(".pricesTotal").text(pricesTotal.toLocaleString("en"));
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
});

function loadPrice() {
  let listProductsElement = $(".content__body__products .card-body");
  for (let i = 0; i < listProductsElement.length; i++) {
    let prodcutCount = parseInt(
      $(listProductsElement[i]).find(".count").text()
    );
    let prodcutPriceText = $(listProductsElement[i]).find(".price").text();
    let productPrice = parseFloat(prodcutPriceText.replaceAll(",", ""));
    $(listProductsElement[i])
      .find(".priceTotal")
      .text((prodcutCount * productPrice).toLocaleString("en"));
  }
  let pricesTotal = 0;
  let checkedElement = $(
    ".content__body__products input[type='checkbox']:checked"
  );
  let listProductsCheckedElement = $(checkedElement).closest(".card-body");
  for (let i = 0; i < listProductsCheckedElement.length; i++) {
    pricesTotal += parseFloat(
      $(listProductsCheckedElement[i])
        .find(".priceTotal")
        .text()
        .replaceAll(",", "")
    );
  }
  $(".pricesTotal").text(pricesTotal.toLocaleString("en"));
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

function loadProducts() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let cartContainer = document.querySelector(".content__body__products");

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<h3 class='fw-bold'>Giỏ hàng trống.</h3>";
  } else {
    let html = "";

    for (let i = 0; i < cartItems.length; i++) {
      let product = cartItems[i];
      html += `<div class="card mb-3 border-0 shadow">
      <div class="row g-0">
          <div class="col-4 p-4">
              <img src="${
                product.imgUrl
              }" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-8">
              <div class="card-body pt-1 pe-1">
                  <div class="card-text text-end">
                      <input class="form-check-input shadow-none" type="checkbox" id="checkbox">
                  </div>
                  <h5 class="card-title fw-bold">${product.name}</h5>
                  <div class="row pe-5 mb-2">
                      <div class="col">Số lượng</div>
                      <div class="col row">
                          <button class="col bg-white p-0 border-1 minus">-</button>
                          <span class="count col  text-center">1</span>
                          <button class="col bg-white p-0 border-1 add">+</button>
                      </div>
                  </div>
                  <div class="row pe-5 mb-2">
                      <div class="col">Dung lượng</div>
                      <div class="col">
                          <b><span class="title__color capacity">${
                            product.capacity
                          }</span></b>
                      </div>
                  </div>
                  <div class="row pe-5 mb-2">
                      <div class="col">Màu sắc</div>
                      <div class="col">
                          <b><span class="title__color color">${
                            product.color
                          }</span></b>
                      </div>
                  </div>
                  <div class="row pe-5 mb-2">
                      <div class="col">Đơn giá</div>
                      <div class="col">
                          <span class="price__color fw-bold price">
                              ${product.price.toLocaleString("en")} </span>
                      </div>
                  </div>
                  <div class="row pe-5 mb-2">
                      <div class="col">Tổng tiền</div>
                      <div class="col">
                          <span class="price__color fw-bold priceTotal"></span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
    }

    cartContainer.innerHTML = html;
  }
}
