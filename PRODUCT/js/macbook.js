let macBookProducts = [
  {
    name: `MacBook Air M2 13.6" 2022 - 256GB - Chính hãng Apple Việt Nam`,
    price: "29,990,000 ₫",
    img: "./img/mac-air-m2.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Pro M2 13" 2022 - 256GB - Chính hãng Apple Việt Nam`,
    price: "31,990,000 ₫",
    img: "./img/mac-pro-m2.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Air M2 13.6" 2022 - 512GB - Chính hãng Apple Việt Nam`,
    price: "36,990,000 ₫",
    img: "./img/mac-air-m2.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Pro M2 13" 2022 - 512GB - Chính hãng Apple Việt Nam`,
    price: "36,990,000 ₫",
    img: "./img/mac-pro-m2.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Pro M2 13" 2022 - 16GB/256GB - Chính hãng Apple Việt Nam`,
    price: "36,990,000 ₫",
    img: "./img/mac-pro-m2.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Air M2 13" 2022 - 16GB/256GB - Chính hãng Apple Việt Nam`,
    price: "39,990,000 đ",
    img: "./img/mac-air-m2.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple M1 - MacBook Pro 13'' 512GB 2020 - Chính hãng Apple Việt Nam`,
    price: "32,590,000 ₫",
    img: "./img/apple-m1-mac-pro-2020.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Air 13-inch M1 (8GB/256GB) - Chính hãng Apple Việt Nam`,
    price: "27,990,000 ₫",
    img: "./img/mac-air-m1.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple M1 - MacBook Pro 13" 256GB 2020 - Chính hãng Apple Việt Nam`,
    price: "27,890,000 ₫",
    img: "../img/apple-m1-mac-pro-2020.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple iMac 2021 M1 24'' 7 Core GPU - 256GB - Chính hãng Apple Việt Nam`,
    price: "31,490,000 đ",
    img: "./img/apple-imac-m1-7core.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple iMac 2021 M1 24'' 8 Core GPU - 512GB - Chính hãng Apple Việt Nam`,
    price: "41,490,000 đ",
    img: "./img/apple-imac-m1-8-core.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
];

function loadMacbook() {
  let container = $(".content__product .product");
  let html = "";

  container.html("");

  macBookProducts.forEach((item) => {
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

loadMacbook();
