let iPadProducts = [
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi - 128GB`,
    price: "22,990,000 ₫",
    img: "./img/ipad-pro-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi - 256GB`,
    price: "25,950,000 ₫",
    img: "./img/ipad-pro-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi+5G - 128GB`,
    price: "25,990,000 ₫",
    img: "./img/ipad-pro-m1-5g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi - 512GB`,
    price: "31,890,000 ₫",
    img: "./img/ipad-pro-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Mini 6 - 8.3" - (2021) - Wifi - 64GB`,
    price: "11,990,000 ₫",
    img: "./img/ipad-mini-6.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Mini 6 - 8.3" - (2021) - 5G - 64GB`,
    price: "15,490,000 ₫",
    img: "./img/ipad-mini-6-5g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - Wifi - 64GB - Chính Hãng Apple Việt Nam`,
    price: "6,860,000 ₫",
    img: "./img/ipad-gen-9.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - Wifi - 256GB - Chính Hãng Apple VN`,
    price: "10,990,000 ₫",
    img: "./img/ipad-gen-9.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - 4G - 64GB - Chính Hãng Apple Việt Nam`,
    price: "9,690,000 ₫",
    img: "./img/ipad-gen-9-4g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - 4G - 256GB - Chính Hãng Apple Việt Nam`,
    price: "12,990,000 ₫",
    img: "./img/ipad-gen-9-4g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Air 5 M1 10.9" - 2022 - Wifi - 64GB - Chính Hãng Apple Việt Nam`,
    price: "13,990,000 ₫",
    img: "../img/ipad-air-5-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
];

function loadIpad() {
  let container = $(".content__product .product");
  let html = "";

  container.html("");

  iPadProducts.forEach((item) => {
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

loadIpad();
