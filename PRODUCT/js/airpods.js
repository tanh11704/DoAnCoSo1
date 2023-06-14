let airpodsProducts = [
  {
    name: `AirPods Pro 2 - Chính hãng Apple Việt Nam`,
    price: "7,990,000 ₫",
    img: "./img/airpods-pro-2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Airpods 3 - Lightning Charging Case – Chính hãng Apple Việt Nam`,
    price: "4,990,000 ₫",
    img: "./img/airpods-3.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `AirPods 2 - Case sạc thường chính hãng VN/A (MV7N2VN/A)`,
    price: "4,990,000 ₫",
    img: "./img/airpods-2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `AirPods Pro - Chính Hãng Apple (MLWK3ZP/A, MagSafe)`,
    price: "7,990,000 ₫",
    img: "./img/airpods-pro.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
];

function loadAirpods() {
  let container = $(".content__product .product");
  let html = "";

  container.html("");

  airpodsProducts.forEach((item) => {
    html += `<div class="col-5 col-md-3 card mx-4 mb-3 border-0 p-0">
                                <div class="img d-flex justify-content-center align-items-center p-4">
                                    <a href="${item.link}"><img src="${item.img}" alt=""
                                            class="w-100"></a>
                                </div>
                                <div class="card-body">
                                    <div class="card-title text-black fw-bold"><a href="../DES_PRODUCT/iphone14.html"
                                            class="text-black text-decoration-none">${item.name}</a></div>
                                    <hr>
                                    <div class="card-text fw-bold">${item.price}</div>
                                </div>
                            </div>`;
  });

  container.html(html);
}

loadAirpods();
