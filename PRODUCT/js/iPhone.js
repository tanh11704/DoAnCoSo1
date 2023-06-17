let iPhoneProducts = [
  {
    name: "iPhone 14 Pro (256GB) - Chính hãng VN/A",
    price: "27,390,000 đ",
    img: "./img/iphone14-prm.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro (512GB) - Chính hãng VN/A",
    price: "31,990,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro (1TB) - Chính hãng VN/A",
    price: "33,990,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro Max (256GB) - Chính hãng VN/A",
    price: "29,390,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro Max (1TB) - Chính hãng VN/A",
    price: "40,890,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 (128GB) - Chính hãng VN/A",
    price: "18,990,000 ₫",
    img: "./img/iphone14.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 (256GB) - Chính hãng VN/A",
    price: "21,890,000 ₫",
    img: "./img/iphone14.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 (512GB) - Chính hãng VN/A",
    price: "23,490,000 ₫",
    img: "./img/iphone14.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Plus (128GB) - Chính hãng VN/A",
    price: "21,490,000 ₫",
    img: "./img/iphone14.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Plus (256GB) - Chính hãng VN/A",
    price: "24,390,000 ₫",
    img: "./img/iphone14.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Plus (512GB) - Chính hãng VN/A",
    price: "24,990,000 ₫",
    img: "./img/iphone14.webp",
    link: "../DES_PRODUCT/iphone14.html",
  },
];

function loadIphone() {
  let container = $(".content__product .product");
  let html = "";

  container.html("");

  iPhoneProducts.forEach((item) => {
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

loadIphone();
