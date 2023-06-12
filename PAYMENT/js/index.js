$(document).ready(function () {
    $("#paymentForm").submit(function (e) {
        e.preventDefault();
        swal({
            title: "Thành công!",
            text: "Thanh toán thành công!",
            icon: "success",
            button: "OK",
        });
    });
});
